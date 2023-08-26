import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { MotiText, TransitionConfig } from "moti";
import TabBarIcon from './tab-icon';
// import { scale } from "react-native-size-matters";

// const Transition: TransitionConfig = { type: "timing", duration: 400 };
// const fromAnimation = { opacity: 1, scale: 0.9 };

export function AppBottomTab({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainTabContainer, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabStyle}
          >
            <View style={styles.tabStyle}>
              <TabBarIcon name={label.toLowerCase()} focused={isFocused} />
              {/* <MotiText
                style={[
                  isFocused ? styles.focusedLabelStyle : styles.labelStyle,
                  { color: isFocused ? "black" : "grey" }, // Color change
                ]}
                from={fromAnimation}
                animate={{
                  scale: isFocused ? 1 : 0.9,
                }}
                transition={Transition}
              >
                {label}
              </MotiText> */}
              <Text>{label}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  labelStyle: {
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  focusedLabelStyle: {
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 5,
  },
});
