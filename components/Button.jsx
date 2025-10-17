import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex:1,
    height: 40,
    backgroundColor: "#4F63AC",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
