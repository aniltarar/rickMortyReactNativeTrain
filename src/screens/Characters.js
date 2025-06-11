import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchCharacters } from '../api/rickAndMorty'
import CharacterBox from '../components/CharacterBox'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context';

const Characters = () => {

  // useState ile karakterleri ve loading durumunu tutuyoruz.
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  // search için 2 state kuracağız. Biri input diğeri filter
  const [search, setSearch] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState([])
  

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

  // useEffect ile search state'i değiştiğinde filteredCharacters state'ini güncelliyoruz.
  useEffect(()=>{
    // Eğer search boş ise, tüm karakterleri gösteriyoruz.
    if (search.trim() === '') {
      setFilteredCharacters(characters)
    } else {
      // Eğer search dolu ise, karakterleri filtreliyoruz.

      const filtered = characters.filter(character => 
        character.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredCharacters(filtered)
    }
  },[search, characters])


  // Eğer loading true ise, bir yükleme mesajı gösterebiliriz.
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    // SafeAreaView ile ekranın güvenli alanını kullanıyoruz. Bu sayede ekranın üst ve alt kenarlarında boşluk kalmıyor.
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="p-4">
        <SearchBar search={search} setSearch={setSearch} />
      </View>
      {/* FlatList ile karakterleri listeliyoruz. */}
      <FlatList
        data={filteredCharacters}
        renderItem={({ item }) => <CharacterBox character={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
      
        
      
    </SafeAreaView>
  
  )
}

export default Characters