import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import BottomBar from '../components/BottomBar';

const AllPlacesScreen = ({ route, navigation }) => {
  const { places } = route.params;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <Text className="text-xl text-gray-800">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Details</Text>
        <TouchableOpacity className="p-2">
          <Text className="text-gray-500 text-2xl">•••</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center mt-4 px-4">
        <TouchableOpacity className="flex-1 bg-gray-100 py-2 rounded-full justify-center items-center mr-2">
          <Text className="text-sm font-medium text-gray-800">Places</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-gray-200 py-2 rounded-full justify-center items-center ml-2">
          <Text className="text-sm font-medium text-gray-500">Guide</Text>
        </TouchableOpacity>
      </View>

      <View className="px-4 mt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-gray-800">Popular places</Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-orange-500">View all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {places.map((place) => (
          <TouchableOpacity
            key={place.id}
            onPress={() => navigation.navigate('PlaceDetails', { place })}
            className="flex-row items-center mb-4 bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              source={{ uri: place.image }}
              className="w-24 h-24 rounded-lg mr-4"
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="text-base font-bold text-gray-800">{place.title}</Text>
              <Text className="text-sm text-gray-500 mt-1">{place.location}</Text>
              <Text className="text-sm text-orange-500 mt-1">
                {Math.floor(Math.random() * 400 + 50)} km from Bali
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                Average cost ${place.price}/day to stay
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomBar navigation={navigation} />
    </View>
  );
};

export default AllPlacesScreen;