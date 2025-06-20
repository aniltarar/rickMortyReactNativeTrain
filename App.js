import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Episodes from "./src/screens/Episodes";
import Characters from "./src/screens/Characters";
import CharacterDetail from "./src/screens/CharacterDetail";
import EpisodeDetail from "./src/screens/EpisodeDetail";

const App = () => {
  const Stack = createNativeStackNavigator(); // Burada createNativeStackNavigator ile beraber Stack oluşturuluyor
  return (
    <NavigationContainer>
      {/*  NavigationContainer ile uygulama navigasyonunu sarmalıyoruz */}
      {/* Stack.Navigator ile ekranlar arasında geçiş yapabilmemizi sağlıyoruz */}
      {/* screenOptions ile başlık ayarlarını yapıyoruz */}
      {/* Stack.Screen ile beraber sayfaları belirliyoruz. */}
      <Stack.Navigator
        screenOptions={{ headerTitle: "React Native Uygulaması" }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Episodes" component={Episodes} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
