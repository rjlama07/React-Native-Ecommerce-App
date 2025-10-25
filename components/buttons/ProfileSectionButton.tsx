import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { vs, s } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { MaterialIcons } from "@expo/vector-icons";
import { AppColors } from "../../styles/colors";

interface ProfileButtonProps {
  onPress: () => void;
  title: string;
}

const ProfileSectionButton: FC<ProfileButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyles}>
      <View style={styles.textContainer}>
        <AppText style={styles.textStyle}>{props.title}</AppText>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.medGray}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  buttonStyles: {
    width: "100%",
    marginTop: vs(14),
    flexDirection: "row",
    paddingBottom: vs(10),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
  },
  textStyle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
  },
  textContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: s(8),
  },
});
