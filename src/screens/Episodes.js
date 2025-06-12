import { View, Text, FlatList } from "react-native";
import React, { use, useEffect, useState } from "react";
import { fetchEpisodes } from "../api/rickAndMorty";
import { SafeAreaView } from "react-native-safe-area-context";
import EpisodeBox from "../components/EpisodeBox";
import SearchBar from "../components/SearchBar";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  const getEpisodes = async () => {
    setLoading(true);
    try {
      const data = await fetchEpisodes();
      setEpisodes(data.results);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredEpisodes(episodes);
    } else {
      const filtered = episodes.filter((episode) =>
        episode.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredEpisodes(filtered);
    }
  }, [search, episodes]);

  if (loading)
    return <Text className="text-white text-center mt-4">Loading...</Text>;

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <SearchBar search={search} setSearch={setSearch} />
      <Text className="text-2xl font-bold text-center mt-4">Episodes</Text>
      <FlatList
        data={filteredEpisodes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => <EpisodeBox episode={item} />}
      />
    </SafeAreaView>
  );
};

export default Episodes;
