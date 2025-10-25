import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyCard = () => {
  const navigator = useNavigation<any>();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={100}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your card is Empty</AppText>
      <AppText style={styles.message}>
        Browse our products and find something you like
      </AppText>
      <AppButton
        style={styles.buttonStyle}
        title="Go to Shop"
        onPress={() => {
          navigator.navigate("Home");
        }}
      ></AppButton>
    </View>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  message: {
    textAlign: "center",
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    marginBottom: vs(20),
  },
  buttonStyle: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
