import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/fonts";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
// import { products } from "../../constants/products";
import { vs } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../stores/reducers/cardSlice";
import { getProductsData } from "../../config/dataServices";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [isProductLoading, setProductLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setProductLoading(true);
      const data = await getProductsData();
      setProducts(data);
      setProductLoading(false);
    };
    fetchData();
  }, []);

  return (
    <AppSafeView>
      <HomeHeader />
      {isProductLoading && <ActivityIndicator />}
      {!isProductLoading && (
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
      )}
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
