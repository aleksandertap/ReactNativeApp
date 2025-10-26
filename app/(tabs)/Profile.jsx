import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "@/components/loggedIn/Header";
import ListItem from "@/components/loggedIn/ListItem";
import { colors } from "@/assets/styles/colors";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Profile = () => {
  const num = 10;
  const router = useRouter();

  const onLogOut = () => {
    console.log("Logging out");
  };

  const onSettingsPress = () => {
    router.push("/Profile/Setting");
  }

  return (
    <View style={{ flex: 1}}>
      <View style={styles.container}>
        <View style={styles.content}>
        <Header title="Profile" showLogout onLogout={onLogOut} />
        <Text style={styles.name}>User name</Text>
        <Text style={styles.email}>User email</Text>

        <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
        <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
        </View>
        <Button text="Add New Listing"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default Profile;
