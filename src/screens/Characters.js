import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchCharacters } from '../api/rickAndMorty'
import CharacterBox from '../components/CharacterBox'

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect ile Character.js ilk açıldığında karakterleri çağırıyoruz. Bu yüzden getCharacters fonksiyonunu oluşturuyoruz.
  const getCharacters = async () => {
    setLoading(true)
    try {
      const data = await fetchCharacters()
      setCharacters(data.results)
      // console.log("Characters fetched successfully:", data.results) //veri kontrolü
    } catch (error) {
      console.error("Error fetching characters:", error)
    } finally {
      setLoading(false)
    }
  } 

  // useEffect ile component ilk yüklendiğinde getCharacters fonksiyonunu çağırıyoruz.
  useEffect(()=>{
    getCharacters()
  },[])


  // Eğer loading true ise, bir yükleme mesajı gösterebiliriz.
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <FlatList
      data={characters}
      renderItem={({item}) => <CharacterBox character={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      />
    </View>
  )
}

export default Characters