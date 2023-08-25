import React from "react";
import { scale } from "react-native-size-matters";
import { View, PressableScale } from "@/ui";
import { StyleSheet, Image } from "react-native";
import { useTheme, ColorProps } from "@shopify/restyle";
import { Theme } from "@/theme";
import { IconTypes, icons } from "@/assets/icons";

type ImageButtonProps = {
  icon: IconTypes;
  onPress: () => void;
  size?: number;
  imageSize?: number;
  backgroundColor?: ColorProps<Theme>["color"];
};

export const ImageButton = ({
  icon,
  size = scale(34),
  imageSize = scale(18),
  onPress,
  backgroundColor,
}: ImageButtonProps) => {
  const theme = useTheme<Theme>();

  return (
    <PressableScale onPress={onPress}>
      <View
        // @ts-ignore
        backgroundColor={backgroundColor}
        style={[styles.container, { height: size, width: size, borderRadius: size / 2 }]}
      >
        <Image
          source={icons[icon]}
          style={{
            height: imageSize,
            width: imageSize,
            //borderRadius: imageSize / 2,
          }}
          resizeMode="contain"
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
