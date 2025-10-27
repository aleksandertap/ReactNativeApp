import { colors } from '@/assets/styles/colors'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const EditableBox = ({ label, value, onChangeText, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,
    },
    label: {
        color: colors.grey,
        fontSize: 12,
        marginBottom: 6,
    },
    input: {
        fontSize: 14,
        color: colors.blue,
        fontWeight: "500",
    },
})

export default EditableBox