import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import Header from "@/components/loggedIn/Header";
import { useRouter } from "expo-router";
import { colors } from "@/assets/styles/colors";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { categories } from "@/data/categories";

const NewListing = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    if (result.assets.length) {
      setImages((list) => [...list, ...result.assets]);
      setLoading(false);
    }
  };

  const onDeleteImage = (image) => {
    setImages((list) => {
      const filteredImages = list.filter((img) => img.fileName !== image.fileName);
      return filteredImages;
    });
  };

  const onChange = (value, key) => {
    setValues((val) => ({ ...val, [key]: value }));
  };

  return (
    <View style={{ flex: 1, padding:24, backgroundColor: colors.white  }}>
      <KeyboardAvoidingView behavior="position">
        <Header title="Create a new listing" onBackPress={goBack} showBack={true} />
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Upload photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
            {images.map((image, index) => (
              <View
                key={image.fileName ?? image.uri ?? String(index)}
                style={styles.imageContainer}
              >
                <Image style={styles.image} source={{ uri: image.uri }} />
                <Pressable onPress={() => onDeleteImage(image)}>
                  <Image
                    style={styles.deleteIcon}
                    source={require("../../assets/images/closed.png")}
                  />
                </Pressable>
              </View>
            ))}
            {loading ? <ActivityIndicator /> : null}
          </View>
          <Input
            text="Title"
            placeholderText="Listing Title"
            value={values.title}
            onChangeText={(v) => onChange(v, "title")}
          />
          <Input
            text="Category"
            placeholderText="Select the category"
            value={values.category}
            onChangeText={(v) => onChange(v, "category")}
            type="picker"
            options={categories}
          />
          <Input
            text="Price"
            placeholderText="Enter price in USD"
            value={values.price}
            onChangeText={(v) => onChange(v, "price")}
            keyboardType="numeric"
          />
          <Input
            style={styles.textarea}
            text="Description"
            placeholderText="Tell us more..."
            value={values.description}
            onChangeText={(v) => onChange(v, "description")}
            multiline
          />
          <Button text="Submit" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 16,
    color: colors.blue,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: "dotted",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightgray,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadPlus: {
    fontSize: 28,
    color: colors.white,
    marginTop: -4,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imageContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    marginTop: -10,
    marginLeft: -18,
  },
  textarea: {
    minHeight: 120,
    paddingTop: 16,
  },
});

export default NewListing;
