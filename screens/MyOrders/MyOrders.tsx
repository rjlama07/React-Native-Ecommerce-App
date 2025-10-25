import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import AppbarBackButton from "../../components/headers/AppbarBackButton";
import MyOrderCard from "../../components/cart/MyOrderCard";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";

const orderData = [
  {
    id: 1,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
  {
    id: 2,
    date: "2020-01-01",
    totalAmount: 190.5,
    totalPrice: "$290",
  },
  {
    id: 3,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
  {
    id: 4,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
];

const MyOrders = () => {
  return (
    <AppSafeView>
      <AppbarBackButton title="My Orders" />
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: sharedPaddingHorizontal,
          paddingVertical: sharedPaddingHorizontal,
          gap: 12,
        }}
        data={orderData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => {
          return <MyOrderCard {...item.item} />;
        }}
      />
    </AppSafeView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
