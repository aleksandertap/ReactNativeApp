import { Stack } from "expo-router";
import { colors } from "@/assets/styles/colors";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack
        screenOptions={{
          headerTintColor: colors.blue,
          headerTitleStyle: { fontSize: 26, fontWeight: 600 },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ title: "Sign Up" }} />
        <Stack.Screen name="SignIn" options={{ title: "Sign In" }} />
      </Stack>
    </>
  );
}
