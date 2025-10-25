import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { commonStyles } from "../../styles/sharedStyles";

interface MyOrderProps {
  date: string;
  totalAmount: number;
  totalPrice: string;
}

const MyOrderCard: FC<MyOrderProps> = (props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>ORDER DETAILS</AppText>
      <View style={styles.row}>
        <AppText style={styles.detailsText}>
          Total Price:{props.totalAmount}$
        </AppText>
        <AppText style={styles.detailsText}>{props.totalPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.detailsText}>Date:{props.date}</AppText>
        <AppText style={styles.detailsText}>{props.date}</AppText>
      </View>
    </View>
  );
};

export default MyOrderCard;

const styles = StyleSheet.create({
  title: {
    fontSize: s(14),
    borderBottomWidth: 3,
    borderBottomColor: AppColors.borderColor,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingBottom: 8,
    marginBottom: 8,
  },
  detailsText: {
    fontSize: s(14),
    paddingBottom: 8,
    marginBottom: 8,
  },
  container: {
    padding: 16,
    backgroundColor: AppColors.white,
    ...commonStyles.shadow,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
