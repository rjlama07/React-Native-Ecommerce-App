import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../styles/fonts";
import AppTextInputts from "../../components/inputs/AppTextInputts";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import AppbarBackButton from "../../components/headers/AppbarBackButton";
import { useForm } from "react-hook-form";
import AppTextController from "../../components/inputs/AppTextController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationScheme = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be atleast characters"),
    phoneNumber: yup
      .string()
      .required("PhoneNumber is required")
      .matches(
        /^\+[1-9]\d{1,14}$/,
        "Must be a valid phone number with country code"
      )
      .min(10, "Must be atleast 10 characters"),

    detailsAddress: yup
      .string()
      .required("Address is required")
      .min(15, "Please provide a detailed address"),
  })
  .required();

const CheckoutScreen = (f) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationScheme),
  });

  function saveOrder(formData) {
    console.log(formData);
  }
  return (
    <AppSafeView>
      <AppbarBackButton title={"Checkout"} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        {/* Form */}
        <View style={styles.formContainer}>
          <AppTextController
            control={control}
            name={"fullName"}
            placeHolder="Full Name"
          ></AppTextController>
          <AppTextController
            control={control}
            name={"phoneNumber"}
            placeHolder="Phone Number"
          ></AppTextController>
          <AppTextController
            control={control}
            name={"detailsAddress"}
            placeHolder="Address"
          ></AppTextController>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        <AppButton
          title="Confirm"
          onPress={handleSubmit(saveOrder)}
        ></AppButton>
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  formContainer: {
    padding: 18,
    backgroundColor: AppColors.white,
    borderRadius: 18,
    ...commonStyles.shadow,
  },
});
