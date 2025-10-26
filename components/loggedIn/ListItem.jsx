import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "@/assets/styles/colors";

const ListItem = ({ title, subtitle, onPress, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image style={styles.arrow} source={require("../../assets/images/arrow.png")} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.64,
    elevation: 6,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
  arrow: {
    height: 32,
    width: 32,
  },
});

export default ListItem;
