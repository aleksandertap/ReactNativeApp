import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Seperator from "@/components/Seperator";
import GoogleBtn from "@/components/GoogleBtn";
import { colors } from "@/assets/styles/colors";
import { useRouter } from "expo-router";

const SignIn = () => {
    const router = useRouter()
  
    const goToSignUp = () =>{
      router.push("SignUp")
    }
  return (
    <View style={styles.container}>
      <Input text="E-mail" placeholderText="example@gmail.com" />
      <Input text="Password" placeholderText="*********" isPassword/>
      <Button text="Sign In" />
      <Seperator text="Or sign up with" />
      <GoogleBtn />
      <View style={styles.bottomText}>
        <Text style={styles.baseText}>
          Don't have an account? <Text style={styles.linkText} onPress={goToSignUp}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: "flex",
    backgroundColor: "white",
    flex: 1,
  },
  baseText: {
    fontSize: 14,
    color: colors.blue,
    paddingTop: 2,
  },
  linkText: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: "bold",
  },
  bottomText: {
    alignItems: "center",
  },
});

export default SignIn;
