import React, { ComponentProps, useMemo } from "react";
import { MotiPressable, mergeAnimateProp } from "moti/interactions";

type Props = ComponentProps<typeof MotiPressable>;

export const PressableScale = ({ animate, ...props }: Props) => {
  return (
    <MotiPressable
      {...props}
      animate={useMemo(
        () => (interaction) => {
          // useMemo has better TS support than useCallback
          "worklet";

          const { hovered, pressed } = interaction;

          let scale = 1;
          let opacity = 1;

          if (pressed) {
            scale = 0.95;
            opacity = 0.7;
          } else if (hovered) {
            scale = 0.97;
          }

          // @ts-ignore
          return mergeAnimateProp(interaction, animate, {
            scale,
            opacity,
          });
        },
        [animate]
      )}
    />
  );
};
