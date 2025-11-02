import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Checkbox } from "expo-checkbox";
import Input from "@/components/Input";
import Button from "@/components/Button";
import GoogleBtn from "@/components/GoogleBtn";
import { colors } from "@/assets/styles/colors";
import Seperator from "@/components/Seperator";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    checkbox: "",
  });

  const router = useRouter();

  const goToSignIn = () => {
    router.push("SignIn");
  };

  const handleSignUp = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "", checkbox: "" };

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Please enter your email";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Please enter your password";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!isChecked) {
      newErrors.checkbox = "You must agree to Terms & Privacy";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      router.push("SignIn"); 
    }
  };

  return (
    <View style={styles.container}>
      <Input text="Name" placeholderText="John Doe" onChangeText={setName} />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      <Input text="E-mail" placeholderText="example@gmail.com" onChangeText={setEmail} />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <Input text="Password" placeholderText="*********" isPassword onChangeText={setPassword} />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <View style={styles.checkBoxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#8D9BB5" : undefined}
        />
        <Text style={styles.baseText}>
          I agree with <Text style={styles.linkText}>Terms</Text> &{" "}
          <Text style={styles.linkText}>Privacy</Text>
        </Text>
      </View>
      {errors.checkbox ? <Text style={styles.errorText}>{errors.checkbox}</Text> : null}

      <Button text="Sign Up" style={styles.signUpBtn} onPress={handleSignUp} />

      <Seperator text="Or sign up with" />
      <GoogleBtn />

      <View style={styles.bottomText}>
        <Text style={styles.baseText}>
          Already have an account?{" "}
          <Text style={styles.linkText} onPress={goToSignIn}>
            Sign in
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
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
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
  signUpBtn: {
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

export default SignUp;
