import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  title:string,
  handlePress: () => void,
  containerStyles: string
}

const CustomButton = ({title, handlePress,containerStyles}: Props) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7} 
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}>
      <Text className='text-primary font-psemibold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})