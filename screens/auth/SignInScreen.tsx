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

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGE_PATHS.logo} style={styles.logo} />
      <AppTextInputts
        value={email}
        placeHolder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <AppTextInputts
        value={password}
        placeHolder="Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Login" onPress={() => {}}></AppButton>
      <AppButton
        title="SignUp"
        onPress={() => {}}
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
