import React, {useState} from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Input from "@/components/Input";

import { colors } from "@/assets/styles/colors";

const Header = ({ title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearch = () => {
    setShowSearchInput(search => !search);
  }

  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={onBackPress}>
          <Image style={styles.icon} source={require("@/assets/images/back.png")} />
        </Pressable>
      ) : showSearch ? (
        <Pressable onPress={onSearch}>
          <Image style={styles.icon} source={require("@/assets/images/search.png")} />
        </Pressable>
      ) : <View style={styles.space} />}
      <Text style={styles.title}>{title}</Text>
      {showLogout ? (
        <Pressable onPress={onLogout}>
          <Image style={styles.icon} source={require("@/assets/images/logout.png")} />
        </Pressable>
      ) : <View style={styles.space} />}
      {
        showSearchInput ? (
          <Input placeholderText="Type your keyword" onChangeText={onSearchKeyword} value={keyword}/>
        ) : null
        
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  }
});

export default Header;
