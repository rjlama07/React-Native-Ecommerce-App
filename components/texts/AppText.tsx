import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";

interface AppTextProp extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  varient?: "bold" | "medium";
}

const AppText: FC<AppTextProp> = ({
  children,
  style,
  varient = "medium",
  ...rest
}) => {
  return (
    <View>
      <Text {...rest} style={[styles[varient], style]}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontFamily: AppFonts.Bold,
    fontSize: s(18),
    color: AppColors.black,
  },

  medium: {
    fontFamily: AppFonts.Medium,
    fontSize: s(16),
    color: AppColors.black,
  },
});
