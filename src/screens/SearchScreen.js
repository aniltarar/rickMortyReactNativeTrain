import { View, Text, Button } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <SearchBar/>
    <Button title="Home'a Git" onPress={() => navigation.navigate('Home')} />
      
    </View>
  )
}

export default SearchScreen