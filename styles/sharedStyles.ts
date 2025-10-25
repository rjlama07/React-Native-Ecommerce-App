import { s } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { AppColors } from "./colors";

export const sharedPaddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    //Ios
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //Android
    elevation: 5,
  },
});
