import Header from "@/components/loggedIn/Header";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CatergoryBar from "@/components/loggedIn/CatergoryBar";
// import { products } from "@/data/products"; // No longer needed
import ProductHomeItem from "@/components/loggedIn/ProductHomeItem";
import { colors } from "@/assets/styles/colors";
import { useRouter } from "expo-router";

const axios = require("axios");

const Home = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keyword, setKeyword] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
      setSelectedProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length === 0) {
      setSelectedProducts([]);
      return;
    }

    let updatedSelectedProducts = allProducts;

    if (selectedCategory && selectedCategory !== "All") {
      updatedSelectedProducts = updatedSelectedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (keyword) {
      const searchKeyword = keyword.toLowerCase();
      updatedSelectedProducts = updatedSelectedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword)
      );
    }

    setSelectedProducts(updatedSelectedProducts);
  }, [allProducts, selectedCategory, keyword]);

  useEffect(() => {
    if (allProducts.length > 0) {
      const uniqueCategories = allProducts.reduce(
        (acc, product) => {
          if (!acc.includes(product.category)) {
            acc.push(product.category);
          }
          return acc;
        },
        ["All"]
      );

      const formattedCategories = uniqueCategories.map((name) => {
        const title = name === "All" ? "All" : name.charAt(0).toUpperCase() + name.slice(1);

        return {
          id: name,
          title: title,
        };
      });
      setCategoriesList(formattedCategories);
    } else {
      setCategoriesList([]);
    }
  }, [allProducts]);

  const renderProductItem = ({ item }) => {
    const onProductPress = (product) => {
      router.push({
        pathname: "/ProductDetails/ProductDetails",
        params: {
          product: JSON.stringify(product),
        },
      });
    };
    // 1. Define the maximum length
        const MAX_LENGTH = 20;

        // 2. Trim the title and add ellipsis if needed
        const trimmedTitle =
            item.title.length > MAX_LENGTH
                ? item.title.substring(0, MAX_LENGTH) + '...'
                : item.title;

        // 3. Create a new product object with the trimmed title
        const displayItem = {
            ...item, // Keep all other properties (price, image, id, etc.)
            title: trimmedTitle, // Overwrite the title with the trimmed version
        };

        // 4. Pass the new object to ProductHomeItem
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...displayItem} />
        );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Find All You Need"
        showSearch={true}
        onSearchKeyword={setKeyword}
        keyword={keyword}
      />
      <CatergoryBar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        categories={categoriesList}
      />
      <FlatList
        numColumns={2}
        data={selectedProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={{ height: 250 }} />}
        contentContainerStyle={styles.centered}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  centered: {
    alignItems: "center",
  },
});

export default Home;
