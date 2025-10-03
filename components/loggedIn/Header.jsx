import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { colors } from "@/assets/styles/colors";

const Header = ({ title, onBackPress, onSearch, onLogout, showBack, showSearch, showLogout }) => {
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
      ) : null}
      <Text style={styles.title}>{title}</Text>
      {showLogout ? (
        <Pressable onPress={onLogout}>
          <Image style={styles.icon} source={require("@/assets/images/logout.png")} />
        </Pressable>
      ) : null}
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
});

export default Header;
