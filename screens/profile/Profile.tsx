import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigator = useNavigation<any>();
  return (
    <AppSafeView>
      <HomeHeader />
      <View
        style={{
          paddingHorizontal: sharedPaddingHorizontal,
        }}
      >
        <AppText
          varient="bold"
          style={{
            marginTop: vs(10),
            fontSize: s(18),
          }}
        >
          Hello, Rj Lama
        </AppText>
        <ProfileSectionButton
          onPress={() => {
            navigator.navigate("MyOrder");
          }}
          title={"My Orders"}
        ></ProfileSectionButton>
        <ProfileSectionButton
          onPress={() => {}}
          title={"Language"}
        ></ProfileSectionButton>
        <ProfileSectionButton
          onPress={() => {}}
          title={"Logout"}
        ></ProfileSectionButton>
      </View>
    </AppSafeView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
