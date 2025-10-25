import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCard from "./EmptyCard";
import CartItem from "../../components/cart/CartItem";
import TotalView from "../../components/cart/TotalView";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../constants/products";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";

const CartScreem = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCard></EmptyCard> */}
      <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(items) => {
            const item = items.item;
            return (
              <CartItem
                title={item.title}
                price={item.price}
                quantity={items.index + 1}
                imageUrl={item.imageURL}
                onAdd={() => {}}
                onRemove={() => {}}
                onDelete={() => {}}
              ></CartItem>
            );
          }}
        />
        <TotalView></TotalView>
      </View>
    </AppSafeView>
  );
};

export default CartScreem;

const styles = StyleSheet.create({});
