import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Header from '@/components/loggedIn/Header'
import { products } from '@/data/products'
import FavoriteItem from '@/components/loggedIn/FavoriteItem'
import { colors } from '@/assets/styles/colors'

const Favorite = () => {
  const renderItem = ({item}) => {
    return (
      <FavoriteItem {...item} />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Favorites"/>
      <FlatList data={products} renderItem={renderItem} keyExtractor={item => String(item.id)} showsVerticalScrollIndicator={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white
  },
})

export default Favorite