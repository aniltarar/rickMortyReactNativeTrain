
import { useRoute } from '@react-navigation/native';
import { View,Text } from 'react-native';

const EpisodeDetail = () => {
  const route = useRoute();
  const { episode } = route.params;

  return (
    <View className="flex-1 bg-zinc-900 p-4">
      <Text className="text-white text-2xl font-bold mb-2">Episode Name : {episode.name}</Text>
      <Text className="text-gray-300 text-lg mb-1">Air Date: {episode.air_date}</Text>
      <Text className="text-gray-300 text-lg mb-1">Episode Code: {episode.episode}</Text>
      <Text className="text-gray-300 text-lg">Characters in this episode: {episode.characters.length}</Text>
    </View>
  );
};

export default EpisodeDetail;
