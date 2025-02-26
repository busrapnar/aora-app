import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  title:string,
  handlePress: () => void,
  containerStyles: string,
  textStyles?: string,
  isLoading?: boolean
}

const CustomButton = ({title, handlePress,containerStyles, textStyles, isLoading}: Props) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7} 
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
    ${containerStyles}
    ${isLoading ? 'opacity50': ''}`}
    disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})