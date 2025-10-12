import { icons } from "@/constants/icons";
import * as React from "react";
import { View, Image, TextInput } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}
const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4" style={{ backgroundColor: '#151312' }}>
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
        style={{ color: '#ffffff', flex: 1, marginLeft: 8, fontSize: 16 }}
      />
    </View>
  );
};

export default SearchBar;
