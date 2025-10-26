import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Profile"  options={{headerShown:false}}/>
      <Stack.Screen name="Setting"  options={{headerShown:false}}/>
    </Stack>
  )
}

export default _layout