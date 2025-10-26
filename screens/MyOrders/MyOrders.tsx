import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import AppbarBackButton from "../../components/headers/AppbarBackButton";
import MyOrderCard from "../../components/cart/MyOrderCard";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { getUserOrders } from "../../config/dataServices";

const MyOrders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    async function getOrder() {
      const data = await getUserOrders();
      setOrderData(data);
    }
    getOrder();
  }, []);

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
          return (
            <MyOrderCard
              date={item.item.detailsAddress}
              totalAmount={item.item.totalProductsPrice}
              totalPrice={item.item.totalProductsPrice}
            />
          );
        }}
      />
    </AppSafeView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
