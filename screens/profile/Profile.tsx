import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { AppColors } from "../../styles/colors";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

const Profile = () => {
  async function handleLogout() {
    await signOut(auth);
  }
  const navigator = useNavigation<any>();
  const { t } = useTranslation();
  const data = useSelector((state: RootState) => state.user);
  return (
    <AppSafeView>
      <HomeHeader />

      <View
        style={{
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        <View style={styles.userDataContainer}>
          <AppText
            varient="bold"
            style={{
              marginTop: vs(10),
              fontSize: s(18),
            }}
          >
            Hello, Rj Lama
          </AppText>
          <AppText
            varient="medium"
            style={{
              marginTop: vs(0),
              fontSize: s(12),
            }}
          >
            {data.userData.email}
          </AppText>
        </View>
        <ProfileSectionButton
          onPress={() => {
            navigator.navigate("MyOrder");
          }}
          title={t("MyOrders")}
        ></ProfileSectionButton>
        <ProfileSectionButton
          onPress={() => {
            SheetManager.show("LANG_SHEET");
          }}
          title={t("Language")}
        ></ProfileSectionButton>
        <ProfileSectionButton
          onPress={() => {
            Alert.alert(
              "Confirm Action",
              "Are you sure you want to Logout",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Logout",
                  onPress: () => handleLogout(),
                  style: "destructive",
                },
              ],
              { cancelable: true }
            );
          }}
          title={t("Logout")}
        ></ProfileSectionButton>
      </View>
      <LanguageBottomSheet />
    </AppSafeView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userDataContainer: {
    backgroundColor: AppColors.background,
    padding: 16,
    marginVertical: 16,
    borderRadius: 16,
  },
});
