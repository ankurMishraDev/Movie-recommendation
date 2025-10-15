import { icons } from '@/constants/icons';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Saved = () => {
  return (
    <View style={styles.container}>
      <View className='flex justify-center items-center flex-1 flex-col gap-5'>
        <Image source={icons.save} className='size-10' tintColor="Fff"/>
        <Text className='text-gray-500 text-base'>Saved</Text>
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030014',
    flex: 1,
    paddingHorizontal: 10
  }
});
