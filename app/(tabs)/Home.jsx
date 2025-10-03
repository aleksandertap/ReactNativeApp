import Header from "@/components/loggedIn/Header";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Header title="Find All You Need" showSearch={true} />
    </View>
  );
};

export default Home;
