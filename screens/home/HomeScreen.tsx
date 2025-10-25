import { StyleSheet, Text, View } from "react-native";

import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/fonts";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../constants/products";
import { vs } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../stores/reducers/cardSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: sharedPaddingHorizontal,
          paddingVertical: sharedPaddingHorizontal,
        }}
        renderItem={(item) => (
          <ProductCard
            imageUrl={item.item.imageURL}
            onPress={() => {
              dispatch(addItemToCart(item.item));
            }}
            title={item.item.title}
            price={item.item.price.toString()}
          />
        )}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
