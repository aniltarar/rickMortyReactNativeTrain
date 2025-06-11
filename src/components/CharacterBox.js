import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CharacterBox = ({ character }) => {

    const navigation = useNavigation(); // useNavigation ile navigasyon objesini alıyoruz. Bu sayede karakter kutusuna tıklandığında karakter detay sayfasına yönlendirebileceğiz.


  return (
    <TouchableOpacity
     className="flex-col  bg-zinc-800 p-4 rounded-lg items-center justify-center mb-4 shadow-2xl"
     onPress={() => navigation.navigate("CharacterDetail", { character })} // onPress ile karakter kutusuna tıklandığında karakter detay sayfasına yönlendiriyoruz.
     >
      <Image
        source={{ uri: character.image }}
        className="w-48 h-48 rounded-full border-2 border-white "
      />
      <View className="ml-4 flex-col items-start  w-full ">
        <Text className="text-white text-xl  font-bold  ">{character.name}</Text>

        {/* Alive || Dead || Unknown için classname yazacağız */}
        <Text
          className={`text-lg font-semibold ${
            character.status === "Alive"
              ? "text-green-500"
              : character.status === "Dead"
              ? "text-red-500"
              : "text-orange-500"
          }`}
        >
            Status : {character.status}
        </Text>
        
        {/* Species Özelliklerine Göre ClassName yazılacak, Human - Alien*/}

        

        <Text className={`
            ${character.species === "Human" ? "text-blue-500" : "text-purple-500"} text-lg font-semibold
            `}>Species: {character.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterBox;
