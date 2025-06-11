import { View, Text, ScrollView,Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
// useRoute ile route bilgilerini alıyoruz. Bu sayede hangi karakterin detaylarını gösterdiğimizi bileceğiz.

const CharacterDetail = () => {
  const route = useRoute(); // useRoute ile route bilgilerini alıyoruz.
  const { character } = route.params; // route.params ile karakter bilgilerini alıyoruz. Bu bilgileri Characters.js dosyasında CharacterBox bileşenine props olarak geçiyoruz.
  // Bu sayede karakter detaylarını bu bileşende kullanabileceğiz.

  return (
    <ScrollView className="flex-1 bg-zinc-800 p-4">
      <Image
        source={{ uri: character.image }}
        className="w-full h-96 rounded-xl mb-6"
      />
      <Text className="text-white text-3xl font-bold mb-2">
        {character.name}
      </Text>

      <Text className="text-white text-lg mb-1">
        <Text className="font-semibold text-gray-400">Status: </Text>
        {character.status}
      </Text>
      <Text className="text-white text-lg mb-1">
        <Text className="font-semibold text-gray-400">Species: </Text>
        {character.species}
      </Text>
      <Text className="text-white text-lg mb-1">
        <Text className="font-semibold text-gray-400">Gender: </Text>
        {character.gender}
      </Text>
      <Text className="text-white text-lg mb-1">
        <Text className="font-semibold text-gray-400">Origin: </Text>
        {character.origin.name}
      </Text>
      <Text className="text-white text-lg mb-1">
        <Text className="font-semibold text-gray-400">Location: </Text>
        {character.location.name}
      </Text>
    </ScrollView>
  );
};

export default CharacterDetail;
