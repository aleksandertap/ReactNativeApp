import { colors } from '@/assets/styles/colors'
import React from 'react'
import { Pressable, Image, Text, View, StyleSheet, Dimensions } from 'react-native'


const ProductHomeItem = ({title,image,price, onPress}) => {
   
  return (
    <View style={styles.container}>
        <Pressable onPress={onPress}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    </View>
  )
}

const  {width}  = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        margin:8
    },
    title: {
        color: colors.textgray,
        paddingVertical:8
    },
    image: {
        width: (width-76) / 2,
        height:220,
        borderRadius: 8
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    }
})

export default ProductHomeItem