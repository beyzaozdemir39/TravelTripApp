import React from 'react';
import { View, Text, Image } from 'react-native';

const FavoritePlaceCard = ({ image, title, location, price }) => {
  return (
    <View className="w-48 bg-white rounded-lg shadow-md overflow-hidden">
      <Image source={{ uri: image }} className="w-full h-32" resizeMode="cover" />
      <View className="p-4">
        <Text className="text-base font-bold text-gray-800">{title}</Text>
        <Text className="text-sm text-gray-500">{location}</Text>
        <Text className="text-orange-500 font-bold text-lg mt-2">${price}</Text>
      </View>
    </View>
  );
};

export default FavoritePlaceCard;
