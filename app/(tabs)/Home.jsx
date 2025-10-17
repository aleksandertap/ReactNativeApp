import Header from "@/components/loggedIn/Header";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CatergoryBar from "@/components/loggedIn/CatergoryBar";
import { products } from "@/data/products";
import ProductHomeItem from "@/components/loggedIn/ProductHomeItem";
import { colors } from "@/assets/styles/colors";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState()
  const [keyword, setKeyword] = useState()
  const [selectedProducts, setSelectedProducts] = useState(products)

  useEffect(()=>{
    if(selectedCategory && !keyword){
      const updatedSelectedProducts = products.filter((product) => product.category === selectedCategory)
    setSelectedProducts(updatedSelectedProducts)
    }else if(selectedCategory && keyword){
      const updatedSelectedProducts = products.filter((product) => product.category === selectedCategory && product.title.toLowerCase().includes(keyword.toLowerCase()))
      setSelectedProducts(updatedSelectedProducts)
    } else if(!selectedCategory && keyword){
      const updatedSelectedProducts = products.filter((product) => product.title.toLowerCase().includes(keyword.toLowerCase()))
      setSelectedProducts(updatedSelectedProducts)
    } else if(!keyword && !selectedCategory){
      setSelectedProducts(products)
    }
    
  }, [selectedCategory, keyword])

  const renderProducts = ({item}) => {
    return (
      <ProductHomeItem  {...item}/>
    )
  }

  const renderProductItem = ({item}) => {
    const onProductPress = (product) => {
      router.push({
                pathname: "/ProductDetails/ProductDetails", 
                params: {
                    product: JSON.stringify(product) 
                }
            })
    }
    return (
      <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
    )
  }


  return (
    <View style={styles.container}>
      <Header title="Find All You Need" showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} />
      <CatergoryBar setSelectedCategory={setSelectedCategory} 
    selectedCategory={selectedCategory}/>
      <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={item => String(item.id)} ListFooterComponent={<View style={{height:250}} />} contentContainerStyle={styles.centered} showsVerticalScrollIndicator={false}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  centered: {
    alignItems: "center"
  }
})

export default Home;
