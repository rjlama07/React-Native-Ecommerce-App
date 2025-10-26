import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../RadioButton/RadioWithTitle";

const appLanguages = ["English", "Romanian", "Arabic", "Hindi", "Nepali"];

const LanguageBottomSheet = () => {
  const [selectedLanguage, setSelectedLangudage] = useState(appLanguages[0]);
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText
          style={{
            marginBottom: vs(20),
            textAlign: "center",
          }}
        >
          Change Language
        </AppText>
        {appLanguages.map((e) => {
          return (
            <RadioWithTitle
              key={e}
              title={e}
              onSelect={() => {
                setSelectedLangudage(e);
              }}
              isSelected={e === selectedLanguage}
            />
          );
        })}

        <AppButton
          title="Confirm"
          onPress={() => {
            SheetManager.hide("LANG_SHEET");
          }}
        ></AppButton>
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
