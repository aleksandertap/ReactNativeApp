import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Button = ({text, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        height:60,
        width:'100%',
        backgroundColor: '#4F63AC',
        borderRadius:8,
        justifyContent: 'center',
        marginBottom: 8
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

    }
})

export default Button