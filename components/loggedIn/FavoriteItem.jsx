import React from 'react'
import { Pressable, Image, View, Text, StyleSheet, Dimensions } from 'react-native'
import { colors } from '@/assets/styles/colors'

const FavoriteItem = ({title,image,price, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri:image}}/>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
        <Image style={styles.icon} source={require("@/assets/images/closed.png")}/>
    </Pressable>
  )
}
const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  },
  title: {
    color:colors.textgray,
    paddingVertical:8
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20
  },
  price: {
    color: colors.black,
    paddingBottom:8
  },
  content: {
    flex: 1
  },
  icon: {
    width:24,
    height:24
  }
})

export default FavoriteItem