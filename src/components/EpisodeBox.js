import { View, Text,  TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EpisodeBox = ({ episode }) => {

  const navigation = useNavigation(); // useNavigation ile navigasyon objesini alıyoruz. Bu sayede episode kutusuna tıklandığında episode detay sayfasına yönlendirebileceğiz.



  return (
    <TouchableOpacity
    className="bg-zinc-800 rounded-lg p-4 mb-4"
    onPress={() => navigation.navigate("EpisodeDetail", { episode })} // onPress ile episode kutusuna tıklandığında episode detay sayfasına yönlendiriyoruz.
    >
      <Text className="text-white text-lg font-bold">{episode.name}</Text>
      <Text className="text-gray-400">Air Date: {episode.air_date}</Text>
      <Text className="text-gray-400">Episode: {episode.episode}</Text>
    </TouchableOpacity>
  );
};

export default EpisodeBox;
