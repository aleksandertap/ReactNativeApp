import React from "react";
import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { colors } from "@/assets/styles/colors";

const Splash = () => {
  const router = useRouter();

  const goToSignUp = () => {
    router.push("SignUp");
  };

  const goToSignIn = () => {
    router.push("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../../assets/images/100501.png")}
        style={styles.image}
      />

      <View>
        <Text style={styles.title}>You'll find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}> Here!</Text>
      </View>

      <Button text="Sign Up" onPress={goToSignUp} />

      <Pressable onPress={goToSignIn}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  innerTitle: {
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
  footerText: {
    color: "#4F63AC",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Splash;
