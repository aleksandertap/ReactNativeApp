import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Pressable, Linking } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { colors } from "@/assets/styles/colors";
import Button from "@/components/Button";

const ProductDetails = () => {
  const params = useLocalSearchParams();
  const productString = params.product;
  let product = {};
  if (productString) {
    product = JSON.parse(productString);
  }

  const router = useRouter()

  const onBackPress = () => {
    router.back()
  }

  const onContact = () => {
    let phone = "number"
    Linking.openURL(`tel:${phone}`)

    let email = "email"
    Linking.openURL(`tel:${email}`)
  }
  return (
    <View style={styles.save}>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Pressable style={styles.backContainer} onPress={onBackPress}>
          <Image style={styles.backIcon} source={require("@/assets/images/back.png")}/>
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image source={require("@/assets/tabs/favorites.png")}  style={styles.bookmarkIcon}/>
        </Pressable>
        <Button text="Contact Seller" onPress={onContact} />
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  save: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    color: colors.textgray,
    fontWeight: "300",
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 8

  },
  bookmarkContainer: {
    backgroundColor: colors.lightgray,
    padding: 18,
    borderRadius: 8,
  },
  bookmarkIcon: {
    width:24,
    height:24
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    position: "absolute"
  },
  backIcon: {
    width:20,
    height:20
  }
});

export default ProductDetails;
