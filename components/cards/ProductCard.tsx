import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";

interface ProductProps {
  onPress: () => void;
  title: string;
  imageUrl: string;
  price: string;
}

const ProductCard: FC<ProductProps> = ({ onPress, imageUrl, title, price }) => {
  return (
    <View style={styles.container}>
      {/* Add to cart */}
      <View style={styles.addToCart}>
        <TouchableOpacity>
          <Ionicons name="cart" color={"white"} size={15} />
        </TouchableOpacity>
      </View>
      {/* iamge container */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        ></Image>
      </View>
      {/* details container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>{price} $</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(152),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  priceText: {
    fontFamily: AppFonts.Bold,
    fontSize: s(14),
    color: AppColors.primary,
    marginTop: vs(7),
  },
  titleText: {
    fontFamily: AppFonts.Medium,
    fontSize: s(14),
    color: AppColors.primary,
  },
  addToCart: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
