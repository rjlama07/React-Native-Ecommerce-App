import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";

const TotalView = () => {
  const navigator = useNavigation();
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Item Price:</AppText>
        <AppText style={styles.textPrice}>$ 120</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>$ 30</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping:</AppText>
        <AppText style={styles.textPrice}>$ 10</AppText>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Sum:</AppText>
        <AppText style={styles.textPrice}>$ 160 </AppText>
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
