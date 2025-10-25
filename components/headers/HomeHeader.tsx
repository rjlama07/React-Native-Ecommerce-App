import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles/colors";
import { IMAGE_PATHS } from "../../constants/image-paths";
import { s, vs } from "react-native-size-matters";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE_PATHS.logo} style={styles.image}></Image>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.primary,
    paddingVertical: vs(4),
  },
  image: {
    height: vs(40),
    width: s(40),
    tintColor: AppColors.white,
  },
});
