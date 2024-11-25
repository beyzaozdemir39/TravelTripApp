import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import BottomBar from '../components/BottomBar';
import TripPlan from '../components/TripPlan'; 

const PlaceDetailsScreen = ({ route, navigation }) => {
  const { place } = route.params;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-2xl text-gray-800">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Details</Text>
        <TouchableOpacity>
          <Text className="text-gray-500 text-2xl">•••</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="overflow-hidden rounded-2xl shadow-md border border-gray-200">
            <Image
              source={{ uri: place.image }}
              className="w-full h-64"
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="px-4">
          <Text className="text-2xl font-bold text-gray-800">{place.title}</Text>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-sm text-gray-500">{place.location}</Text>
            <Text className="text-lg font-bold text-orange-500">${place.price} per day</Text>
          </View>
        </View>

        <View className="px-4 mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">Trip Plan</Text>
          <TripPlan tripPlan={place.tripPlan} />
        </View>

        <View className="px-4">
          <Text className="text-lg font-bold text-gray-800 mb-4">Description</Text>
          <Text className="text-base text-gray-500">
            {place.description || "No description is available for this place."}
          </Text>

          <TouchableOpacity
            className="bg-blue-500 px-8 py-3 rounded-full shadow-md mt-6 self-center"
            onPress={() =>
              navigation.navigate('MapScreen', {
                places: [place],
              })
            }
          >
            <Text className="text-white font-bold">View on Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View className="flex-row justify-between items-center bg-white px-4 py-4 shadow-lg border-t border-gray-200">
        <View>
          <Text className="text-sm text-gray-500">Total Price</Text>
          <Text className="text-xl font-bold text-orange-500">${place.price} /person</Text>
        </View>
        <TouchableOpacity
          className="bg-orange-500 px-8 py-3 rounded-full shadow-md"
          onPress={() => navigation.navigate('BookingScreen', { place })}
        >
          <Text className="text-white font-bold">Order Now</Text>
        </TouchableOpacity>
      </View>

      <BottomBar navigation={navigation} />
    </View>
  );
};

export default PlaceDetailsScreen;
