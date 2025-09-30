import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@/assets/styles/colors'

const Seperator = ({text}) => {
  return (
    <View style={styles.container}>
        <View style={styles.line}/>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20       
    },
    text: {
        color: colors.blue,
        fontWeight:500
    },
    line: {
        backgroundColor: '#DADADA',
        height:1,
        flex:1,
        marginVertical:8
    }
})

export default Seperator