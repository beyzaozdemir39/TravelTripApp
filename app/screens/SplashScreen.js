import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../../assets/welcome-image.png')}
        className="w-80 h-80"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-center mt-6">
        Plan Your Perfect Indonesia Getaway
      </Text>
      <Text className="text-center text-gray-500 mt-2 px-4">
        Indonesia is a traveler's paradise, and this app has everything you need to plan your dream Bali vacation.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-orange-500 py-5 px-10 rounded-full mt-10"
      >
        <Text className="text-white font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
