import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface RadioButtonProps {
  title: string;
  isSelected?: boolean;
  onSelect: () => void;
}

const RadioWithTitle: FC<RadioButtonProps> = ({
  title,
  isSelected = false,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelect();
      }}
    >
      <View style={styles.outerRadioContainer}>
        <View
          style={[
            styles.innerRaidoContainer,
            isSelected
              ? {
                  backgroundColor: AppColors.primary,
                }
              : {},
          ]}
        ></View>
      </View>
      <AppText>{title}</AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    marginBottom: vs(16),
    flexDirection: "row",
    alignItems: "center",
  },
  text: {},
  outerRadioContainer: {
    padding: s(2),
    borderColor: AppColors.primary,
    borderWidth: 2,
    borderRadius: s(15),
    marginRight: 10,
  },
  innerRaidoContainer: {
    height: vs(7),
    width: s(7),
    borderRadius: s(15),
  },
});
