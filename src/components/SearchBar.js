import { View, Text, TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View className = "flex-row items-center px-2 mx-2 bg-white h-16 border-none   rounded-xl shadow-md">
      <AntDesign name="search1" size={24} color="black" />
      <TextInput 
      className = "w-full h-full text-lg " 
      placeholder='Arama yapınız..' 
      autoCorrect={false}
      autoCapitalize='none'
      />
    </View>
  )
}

export default SearchBar