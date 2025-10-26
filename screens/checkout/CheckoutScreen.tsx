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
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { addDoc, collection, doc, sum } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

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

type FormData = yup.InferType<typeof validationScheme>;
const CheckoutScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationScheme),
  });
  const items = useSelector((state: RootState) => state.cart);
  const totalPrice = items.items.reduce((acc, item) => acc + item.sum, 0);
  const userData = useSelector((state: RootState) => state.user.userData);
  const navigation = useNavigation();

  async function saveOrder(formData: FormData) {
    try {
      const orderBody = {
        ...formData,
        items: items.items,
        totalProductsPrice: totalPrice,
      };
      console.log("dadas");
      console.log(userData.uid);
      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");

      const orderRef = await addDoc(userOrderRef, orderBody);
      showMessage({ type: "success", message: "Order Places" });
      navigation.goBack();
    } catch (error) {
      console.log(error);
      console.error(error);
    }
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
