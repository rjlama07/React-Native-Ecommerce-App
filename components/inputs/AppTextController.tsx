import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import AppTextInputts from "./AppTextInputts";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeHolder: string;
  secureTextEntry?: boolean;
  keyBoardType?: "default" | "email-address" | "numeric";
}

const AppTextController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeHolder,
  secureTextEntry,
  keyBoardType,
}: AppTextInputControllerProps<T>) => {
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
          {error && (
            <View style={{ width: "100%" }}>
              <AppText style={styles.errorText}>{error.message}</AppText>
            </View>
          )}
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
    alignSelf: "flex-start",
    textAlign: "left",
    width: "100%",
  },
});
