import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGE_PATHS } from "../../constants/image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInputts from "../../components/inputs/AppTextInputts";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppTextController from "../../components/inputs/AppTextController";
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

const validationSchema = yup
  .object({
    userName: yup
      .string()
      .required("Usernmae is required")
      .min(6, "Username must be atlease 6 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be atlease 6 characters"),
  })
  .required();
type FormData = yup.InferType<typeof validationSchema>;

const SignUpScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigator = useNavigation<any>();
  async function handleCreateUser(formData: FormData) {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigator.navigate("MainAppBottomTabs");
    } catch (e: any) {
      let message: string = "";
      if (e.code === "auth/email-already-in-use") {
        message = "User with this email already exist";
      } else if (e.code === "auth/invalid-email") {
        message = "Invalid email";
      } else if (e.code == "auth//weak-password") {
        message = "This password is too weak";
      } else {
        message = "Something went wrong. Please try again.";
      }
      showMessage({ type: "danger", message: message });
    }
  }

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGE_PATHS.logo} style={styles.logo} />
      <AppTextController
        control={control}
        name={"userName"}
        placeHolder="Username"
      />
      <AppTextController placeHolder="Email" control={control} name={"email"} />
      <AppTextController
        control={control}
        placeHolder="password"
        name={"password"}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={() => {
          handleSubmit(handleCreateUser)();
        }}
      ></AppButton>
      <AppButton
        title="Login"
        onPress={() => {
          navigator.goBack();
        }}
        style={styles.registerButton}
        textColor={AppColors.primary}
      ></AppButton>
    </AppSafeView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
