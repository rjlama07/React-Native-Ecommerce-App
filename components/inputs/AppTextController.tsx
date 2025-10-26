import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInputts from "./AppTextInputts";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";

const AppTextController = ({
  control,
  name,
  rules,
  placeHolder,
  secureTextEntry,
  keyBoardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInputts
            value={value}
            placeHolder={placeHolder}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            KeyboardType={keyBoardType}
            style={error ? styles.errorStyle : {}}
          ></AppTextInputts>
          {error && <AppText style={styles.errorText}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export default AppTextController;

const styles = StyleSheet.create({
  errorStyle: {
    borderColor: AppColors.red,
  },
  errorText: {
    fontSize: s(10),
    marginTop: vs(-5),
    paddingLeft: s(12),
    color: AppColors.red,
    marginBottom: vs(10),
  },
});
