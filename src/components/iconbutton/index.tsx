import React from "react";
import { scale } from "react-native-size-matters";
import { View, PressableScale } from "@/ui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { ColorProps } from "@shopify/restyle";
import { Theme } from "@/theme";
import { IconTypes, icons } from "@/assets/icons";

type IconButtonProps = {
  icon: IconTypes;

  onPress: () => void;
  size?: number;
  disabled?: boolean;
  imageSize?: number;
  color?: ColorProps<Theme>;
};

export const IconButton = ({
  icon,
  size = scale(34),
  imageSize = scale(18),
  disabled,
  onPress,
  color,
}: IconButtonProps) => {
  return (
    <PressableScale onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          // @ts-ignore
          { height: size, width: size, borderRadius: size / 2, backgroundColor: color },
        ]}
      >
        <Image
          source={icons[icon]}
          style={{
            height: imageSize,
            width: imageSize,
            // borderRadius: imageSize / 2,
          }}
          contentFit="contain"
        />
      </View>
    </PressableScale>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: scale(18),
    width: scale(18),
  },
});
