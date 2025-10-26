import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable, Image, Modal, TouchableOpacity } from "react-native";
import { colors } from "@/assets/styles/colors";

const Input = ({ text, placeholderText, isPassword, value, onChangeText,style, type, options ,...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);
  const onEyePress = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const onSelect = (option) => {
    onChangeText(option);
    setPickerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>

    {type === "picker" ? (
      <Pressable style={styles.inPutContainer} onPress={() => setPickerModalVisible(true)}>
        {
          value ? (<Text style={[styles.placeholder, style]} placeholderTextColor={"#8D9BB5"}>{value.title}</Text>) : (
            <Text style={[styles.placeholder, style]} placeholderTextColor={"#8D9BB5"}>{placeholderText}</Text>
          )}
        <Image style={styles.arrow} source={require("../assets/images/arrow.png")} />
      </Pressable>
    ) : (
      <View style={styles.inPutContainer}>
        <TextInput
          value={value} 
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[styles.textInput, style]}
          placeholder={placeholderText}
          placeholderTextColor={"#8D9BB5"}
          {...props}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisible ? require("../assets/images/eye.png"):require("../assets/images/eye_closed.png") } />
          </Pressable>
        ) : null}
      </View>
    )}
    <Modal transparent visible={isPickerModalVisible}>
      <TouchableOpacity activeOpacity={1} onPress={() => setPickerModalVisible(false)} style={styles.modalWrapper}>
        <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
          <Text style={styles.optionTitle}>Select options</Text>
          {
           Array.isArray(options) && options.map(option => {
              if (!option?.id) return null;

              const selected = value?.id === option.id;
              return (<Text onPress={() => onSelect(option)} 
              style={[styles.optionText, selected ? styles.selectedOption : {}]}
              key={option.id}>{option.title}</Text>)
            })
          }
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
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
  },
  arrow: {
    height: 24,
    width: 24,
    marginHorizontal: 16,
    transform: [{ rotate: '90deg' }],
  },
  placeholder: {
    paddinhHorizontal:16,
    paddingVertical:20,
    flex:1,
    color: colors.lightgray,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  optionTitle: {
    color: colors.black,
    paddingVertical: 4,
    fontSize: 15,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: "bold",
  },
});

export default Input;
