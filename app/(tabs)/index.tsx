import { Text, View, ScrollView, StyleSheet, ImageBackground, Image } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from 'expo-router'
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        style={styles.background}
      />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight:"100%",paddingBottom: 10 }}>
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          style={styles.logo}
        />
        <View className="flex-1 mt-5">
          <SearchBar onPress={() => router.push('/search')} placeholder="Search movie" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 48,
    height: 40,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
});