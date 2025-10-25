import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";

interface AppBarProps {
  title: string;
}

const AppbarBackButton: FC<AppBarProps> = ({ title }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigator.goBack();
        }}
      >
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.screenTitleContainer}>
        <AppText style={styles.screenTitle}>{title}</AppText>
      </View>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default AppbarBackButton;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  screenTitleContainer: {
    flex: 1,
    alignItems: "center", // centers the title horizontally within the flex space
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: AppFonts.Medium,
  },
});
