import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icon from '@/constants/icon'

type Props = {
    title: string,
    otherStyles: string,
    handleChangeText: () => void,
    keyboardType: string,
    value: any,
    placeholder: string
}

const FormField = ({title, otherStyles, value, keyboardType,handleChangeText, placeholder}: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text  
      className='text-base text-gray-100 font-pmedium'>
        {title}
      </Text>
      <View className='border-2 border-black-200 w-full h-16 px-4 rounded-2xl focus:border-secondary items-center flex-row bg-black-100'>
        <TextInput className='flex-1 text-white font-psemibold text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' &&(
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
            source={!showPassword ? icon.eye : icon.eyeHide}
            className='w-6 h-6'
            resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})