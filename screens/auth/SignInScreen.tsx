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
import { AppRoutes } from "../../constants/App-Routes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppTextController from "../../components/inputs/AppTextController";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../stores/reducers/userSlice";

const validationSchema = yup
  .object({
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

const SignInScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  const navigator = useNavigation<any>();

  async function login(formData: FormData) {
    try {
      console.log(formData);
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch(setUserData(userCredentail.user));
    } catch (e: any) {
      let errorMessage = "";
      if (e.code === "auth/user-not-found") {
        errorMessage = "User with this email not found";
      } else if (e.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password";
      } else {
        errorMessage = "Something went wrong";
      }
      showMessage({
        type: "danger",
        message: errorMessage,
      });

      console.error(e);
    }
  }

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGE_PATHS.logo} style={styles.logo} />
      <AppTextController control={control} name={"email"} placeHolder="Email" />
      <AppTextController
        control={control}
        name={"password"}
        placeHolder="Password"
        secureTextEntry
      />

      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Login"
        onPress={() => {
          console.log("dasd");
          handleSubmit(login)();
        }}
      ></AppButton>
      <AppButton
        title="SignUp"
        onPress={() => {
          navigator.navigate(AppRoutes.SignUp);
        }}
        style={styles.registerButton}
        textColor={AppColors.primary}
      ></AppButton>
    </AppSafeView>
  );
};

export default SignInScreen;

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
