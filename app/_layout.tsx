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
        <Stack.Screen name="(splash)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(splash)/SignUp" options={{ title: "Sign Up" }} />
        <Stack.Screen name="(splash)/SignIn" options={{ title: "Sign In" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails/ProductDetails" options={{headerShown: false}}/>
      </Stack>
    </>
  );
}
