/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { Theme } from "@/theme";
import { View } from "@/ui";
import { useTheme } from "@shopify/restyle";

export const FocusAwareStatusBar = ({
  barStyle = "dark-content",
  ...props
}: StatusBarProps) => {
  const isFocused = useIsFocused();

  // render
  return isFocused ? <StatusBar barStyle={barStyle} {...props} /> : null;
};

type Props = {
  children: React.ReactNode;
  statusBarColor?: StatusBarProps["backgroundColor"];
  barStyle?: StatusBarProps["barStyle"];
  translucent?: StatusBarProps["translucent"];
} & SafeAreaViewProps;

export const Screen = ({
  children,
  statusBarColor,
  barStyle = "dark-content",
  translucent = false,
  ...rest
}: Props) => {
  let theme = useTheme<Theme>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }} {...rest}>
      <FocusAwareStatusBar
        backgroundColor={statusBarColor}
        barStyle={barStyle}
        translucent={translucent}
      />
      <View flex={1} backgroundColor="background">
        {children}
      </View>
    </SafeAreaView>
  );
};
