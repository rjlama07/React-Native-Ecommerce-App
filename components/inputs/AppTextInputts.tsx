import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { TextInput } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
  secureTextEntry?: boolean;
  KeyboardType?: "default" | "email-address" | "numeric";
  style?: TextStyle;
}

const AppTextInputts: FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeHolder,
  secureTextEntry = false,
  KeyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeHolder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={KeyboardType}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInputts;

const styles = StyleSheet.create({
  input: {
    borderRadius: s(25),
    borderColor: AppColors.borderColor,
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: s(16),
    backgroundColor: AppColors.white,
    height: vs(40),
    marginBottom: vs(10),
    width: "100%",
  },
});
