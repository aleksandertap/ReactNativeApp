import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Seperator from "@/components/Seperator";
import GoogleBtn from "@/components/GoogleBtn";
import { colors } from "@/assets/styles/colors";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const goToSignUp = () => {
    router.push("SignUp");
  };

  const logIn = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email";
        valid = false;
      }
    }

    if (!password) {
      newErrors.password = "Please enter your password";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      router.push("/(tabs)/Home");
    }
  };

  return (
    <View style={styles.container}>
      <Input text="E-mail" placeholderText="example@gmail.com" onChangeText={setEmail} />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <Input text="Password" placeholderText="*********" isPassword onChangeText={setPassword} />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <Button text="Sign In" onPress={logIn} style={styles.signInBtn} />

      <Seperator text="Or sign up with" />
      <GoogleBtn />

      <View style={styles.bottomText}>
        <Text style={styles.baseText}>
          Don't have an account?{" "}
          <Text style={styles.linkText} onPress={goToSignUp}>
            Sign Up
          </Text>
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
    marginTop: 20,
  },
  signInBtn: {
    width: "100%",
    height: 60,
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
});

export default SignIn;
