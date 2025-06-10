import { View, Text, Button, ScrollView, Pressable } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex flex-col h-full bg-[#6bc514] ">

      <View className="h-1/2 flex flex-col items-center justify-center mx-4 ">
        <Text className="text-3xl font-bold text-white  ">
          Rick & Morty API App
        </Text>
        <Text className="text-md text-black mt-2 ">
          Rick & Morty API ile React Native Uygulaması. Navigation, state
          management ve API kullanımı ile Rick & Morty karakterlerini listeleme
          uygulaması.
        </Text>
      </View>

      <View className="flex flex-col items-center justify-center w-full  bg-black h-1/2 ">
      <Text className="text-3xl font-bold text-white mb-4">
        Screens List 
      </Text>
        <ScrollView className="w-full">
          <Pressable
            className="bg-[#6bc514] p-4 rounded-lg m-2 "
            onPress={() => navigation.navigate("Search")}
          >
            <Text className="text-white text-lg font-semibold ">Search</Text>
          </Pressable>
          <Pressable
            className="bg-[#6bc514] p-4 rounded-lg m-2 "
            onPress={() => navigation.navigate("Episodes")}
          >
            <Text className="text-white text-lg font-semibold ">Episodes</Text>
          </Pressable>
          <Pressable
            className="bg-[#6bc514] p-4 rounded-lg m-2 "
            onPress={() => navigation.navigate("Characters")}
          >
            <Text className="text-white text-lg font-semibold ">
              Characters
            </Text>
          </Pressable>
            
            



        </ScrollView>

        
      
      
      </View>
    </View>
  );
};

export default HomeScreen;
