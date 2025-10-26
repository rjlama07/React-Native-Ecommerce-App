import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../RadioButton/RadioWithTitle";
import { languageArr } from "../../constants/LanguageList";
import i18n from "../../localization/i18n";

const LanguageBottomSheet = () => {
  const [selectedLanguage, setSelectedLangudage] = useState(i18n.language);
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
        {languageArr.map((e) => {
          return (
            <RadioWithTitle
              key={e.code}
              title={e.label}
              onSelect={() => {
                setSelectedLangudage(e.code);
              }}
              isSelected={e.code === selectedLanguage}
            />
          );
        })}

        <AppButton
          title="Confirm"
          onPress={() => {
            SheetManager.hide("LANG_SHEET");
            i18n.changeLanguage(selectedLanguage);
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
