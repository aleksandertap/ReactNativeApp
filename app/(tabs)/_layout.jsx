import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  const theme = {
    colors: {
      background: "white",
    },
  };

  return (
    <SafeAreaView>
      <ThemeProvider value={theme}>
        <Tabs
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              if (route.name === "Home") {
                icon = focused
                  ? require("@/assets/tabs/home-active.png")
                  : require("@/assets/tabs/home.png");
              } else if (route.name === "Favorite") {
                icon = focused
                  ? require("@/assets/tabs/favorites-active.png")
                  : require("@/assets/tabs/favorites.png");
              } else if (route.name === "Profile") {
                icon = focused
                  ? require("@/assets/tabs/profile-active.png")
                  : require("@/assets/tabs/profile.png");
              }
              return <Image style={{ width: 24, height: 24 }} source={icon} />;
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { borderTopColor: "lightgray" },
            style: { backgroundColor: "white" },
          })}
        >
          <Tabs.Screen name="Home" />
          <Tabs.Screen name="Favorite" />
          <Tabs.Screen name="Profile" />
        </Tabs>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default _layout;
