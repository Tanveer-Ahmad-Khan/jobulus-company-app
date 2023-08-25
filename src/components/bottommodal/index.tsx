/* eslint-disable react/react-in-jsx-scope */
import { forwardRef, Ref, useCallback } from "react";
import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import { BottomBackdrop } from "./components/bottom-backdrop";
import { BottomSheetHandle } from "./components/bottom-sheet-handle";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import React from "react";

export const BottomModal = forwardRef(
  (
    { children, ...props }: BottomSheetModalProps,
    ref: Ref<BottomSheetModal>
  ) => {
    const theme = useTheme<Theme>();

    return (
      <BottomSheetModal
        ref={ref}
        handleComponent={() => null}
        enablePanDownToClose
        keyboardBlurBehavior="restore"
        backdropComponent={BottomBackdrop}
        {...props}
      >
        {children}
      </BottomSheetModal>
    );
  }
);
