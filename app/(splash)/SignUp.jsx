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
    const router = useRouter()

    const goToSignIn = () => {
      router.push("SignIn")
    }

  return (
    <View style={styles.container}>
      <Input text="Name" placeholderText="John Doe" />
      <Input text="E-mail" placeholderText="example@gmail.com" />
      <Input text="Password" placeholderText="*********" isPassword/>

      <View style={styles.checkBoxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#8D9BB5" : undefined}
        />

        <Text style={styles.baseText}>
          I agree with <Text style={styles.linkText}>Terms</Text>
          <Text>
            {" "}
            & <Text style={styles.linkText}>Privacy</Text>
          </Text>
        </Text>
      </View>

      <Button text="Sign Up" />

      <Seperator text="Or sign up with" />
      <GoogleBtn />

      <View style={styles.bottomText}>
        <Text style={styles.baseText}>
          Already have an account? <Text style={styles.linkText} onPress={goToSignIn}>Sign in</Text>
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
    marginBottom: 16,
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
    alignItems: 'center'
  }
});

export default SignUp;
