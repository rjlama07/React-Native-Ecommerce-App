import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface CartItemProps {
  title: string;
  price: string | number;
  imageUrl: string;
  quantity: number;
  onDelete: () => void;
  onAdd: () => void;
  onRemove: () => void;
}
const CartItem: FC<CartItemProps> = (props) => {
  return (
    <View style={styles.rootContainer}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.imageUrl,
          }}
        ></Image>
      </View>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{props.title}</AppText>
        <AppText style={styles.textPrice}>{props.price} $</AppText>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.iconButton} onPress={props.onAdd}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.quantityText}>{props.quantity}</AppText>
          <Pressable style={styles.iconButton} onPress={props.onRemove}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      {/* Delete Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton} onPress={props.onDelete}>
          <AntDesign
            name="delete"
            size={s(14)}
            color={AppColors.red}
          ></AntDesign>
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderBottomColor: AppColors.blueGray,
  },
  image: {
    height: vs(80),
    width: s(80),
    borderRadius: s(20),
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  textTitle: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    marginTop: vs(6),
  },
  textPrice: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.Medium,
    color: AppColors.red,
    fontSize: s(12),
    marginTop: 3,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: AppColors.blueGray,
    alignSelf: "flex-start",
    padding: 6,
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  iconButton: {
    height: s(20),
    width: s(20),
    borderRadius: s(10),
    backgroundColor: AppColors.blueGray,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    marginHorizontal: 8,
    textAlign: "center",
    color: AppColors.primary,
  },
});
