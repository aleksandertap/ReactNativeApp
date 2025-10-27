import React from "react";
import { Pressable, FlatList, Image, Text, View, StyleSheet } from "react-native";
import { colors } from "@/assets/styles/colors";
import { categories } from "@/data/categories";


const CatergoryBar = ({ setSelectedCategory, selectedCategory, categories }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        contentContainerStyle={styles.list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          const isItemSelected = item.id === selectedCategory;

          return (
            <Pressable style={styles.item} onPress={() => setSelectedCategory(item.id)}>
              <View
                style={[
                  styles.imageContainer,

                  isItemSelected ? { backgroundColor: colors.black } : {},
                ]}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>

              <Text
                style={[
                  styles.title,
                  isItemSelected ? { color: colors.blue, fontWeight: "500" } : {},
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 8,
  },
  list: {
    paddingVertical: 8,
  },
  item: {
    alignItems: "center",
    marginRight: 12,
  },
  title: {
    color: colors.lightBlue,
  },
  image: {
    width: 36,
    height: 36,
  },
  imageContainer: {
    backgroundColor: colors.lightgray,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default CatergoryBar;
