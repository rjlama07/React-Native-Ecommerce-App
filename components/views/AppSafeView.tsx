import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextStyle,
} from "react-native";
import React, { FC } from "react";
import { AppColors } from "../../styles/colors";

interface AppSafeViewProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
