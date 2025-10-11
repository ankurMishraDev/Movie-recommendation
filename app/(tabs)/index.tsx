import { Text, View } from "react-native";
import {Link} from 'expo-router'
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
    <Text className="text-5xl text-k-200 font-bold">Hello!.</Text>
   <Link href="/(tabs)/profile">Profile</Link>
    </View>
  );
}