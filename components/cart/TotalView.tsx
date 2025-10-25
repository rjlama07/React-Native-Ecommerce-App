import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";

interface TotalViewProps {
  price: number;
}
const taxPercent = 6;
const TotalView: FC<TotalViewProps> = (props) => {
  const navigator = useNavigation<any>();
  const calculatedTax = ((taxPercent / 100) * props.price).toFixed(2);
  const totalPrice = (props.price + +calculatedTax + 10).toFixed(2);
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Item Price:</AppText>
        <AppText style={styles.textPrice}>$ {props.price}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>$ {calculatedTax}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping:</AppText>
        <AppText style={styles.textPrice}>$ 10</AppText>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Sum:</AppText>
        <AppText style={styles.textPrice}>$ {totalPrice}</AppText>
      </View>
      <AppButton
        title="Continue"
        onPress={() => {
          navigator.navigate("Checkout");
        }}
      ></AppButton>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
