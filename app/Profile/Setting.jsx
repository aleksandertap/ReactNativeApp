import React, { useState } from "react";
import { Text, StyleSheet, View, Linking, Image, Pressable } from "react-native";
import Header from "@/components/loggedIn/Header";
import ListItem from "@/components/loggedIn/ListItem";
import { colors } from "@/assets/styles/colors";
import EditableBox from "@/components/loggedIn/EditableBox";
import Button from "@/components/Button";

const Setting = () => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: "User", email: "user@email.com"});

  const onChange = (key,value) => {
    setValues(v => ({...v, [key]: value}))
  }

  const onEditPress = () => {
    setEditing(true);
  };
  
  const onSave = () => {
    setEditing(false);
  };

  const onItemPress = () => {
    Linking.openURL("https://www.google.com");
  };

  return (
    <View style={styles.mainContainer}>
      <Header title="Settings" />
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image style={styles.icon} source={require("../../assets/images/edit.png")} />
          </Pressable>
        </View>

        <EditableBox label="Name" value={values.name} editable={editing} onChangeText={v=> onChange('name', v)} />
        <EditableBox label="Email" value={values.email} editable={editing} onChangeText={v=> onChange('email', v)} />
        {editing ? (<Button style={styles.button} onPress={onSave} text="Save" />) : null}
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
        <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.grey,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});

export default Setting;
