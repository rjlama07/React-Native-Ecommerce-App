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

const CheckoutScreen = () => {
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
          <AppTextInputts placeHolder="Full Name"></AppTextInputts>
          <AppTextInputts placeHolder="Phone Number"></AppTextInputts>
          <AppTextInputts placeHolder="Address"></AppTextInputts>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        <AppButton title="Confirm"></AppButton>
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
