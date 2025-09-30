import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const GoogleBtn = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <AntDesign name="google" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "#3F4A59",
    width: '45%',
    borderRadius: 14,
    justifyContent: "center",
    alignSelf: 'center',
    alignItems: 'center',
    padding:16,
    marginBottom: 40
  },
});

export default GoogleBtn;
