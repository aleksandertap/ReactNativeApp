import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable, Image } from "react-native";
import { colors } from "@/assets/styles/colors";

const Input = ({ text, placeholderText, isPassword }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onEyePress = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.inPutContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          style={styles.textInput}
          placeholder={placeholderText}
          placeholderTextColor={"#8D9BB5"}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisible ? require("../assets/images/eye.png"):require("../assets/images/eye_closed.png") } />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    flexDirection: "column",
    marginBottom: 20,
  },
  text: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inPutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#8D9BB5",
    borderRadius: 14,
    paddingHorizontal: 8
  },
  textInput: {
    flex:1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  eye: {
    height:24,
    width: 24,
  }
  
});

export default Input;
