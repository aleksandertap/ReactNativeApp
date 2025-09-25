import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

import Button from "@/components/Button";

const Splash = () => {
  return (
    <View>
      <Image resizeMode="contain" source={require("../assets/images/100501.png")} style={styles.image}/>
      <Text style={styles.title}>You'll find </Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}> Here!</Text>

      <Button text='test'/>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:200,
    },
    title: {
        fontWeight:'bold',
        fontSize: 40,
        textAlign:'center'
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline'
    }
});

export default Splash;
