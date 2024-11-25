import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import FavoritePlaceCard from '../components/FavoritePlaceCard';
import BottomBar from '../components/BottomBar';

const HomeScreen = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/c/4283-a8a7-4577-b850');
        setPlaces(
          response.data.map((item) => ({
            id: item.id,
            image: item.image,
            title: item.title,
            location: item.location,
            price: item.averageCost,
            description: item.description,
          }))
        );
      } catch (error) {
        console.error('Error loading places:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPlaces();
  }, []);

  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="px-6 pt-10">
          <Text className="text-6xl font-extrabold text-gray-800">Let's pack for your trip</Text>
          <Text className="text-lg text-gray-500 mt-2">
            Use one of our suggestions or make a list of what to pack
          </Text>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mx-4 my-4 shadow-sm">
          <TextInput
            placeholder="Search location"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-gray-800"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity className="ml-3 p-3 bg-orange-500 rounded-full">
            <Text className="text-white text-xl">🔍</Text>
          </TouchableOpacity>
        </View>

        <View className="px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Favorite Place</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllPlaces', { places: filteredPlaces })}
            >
              <Text className="text-orange-500 text-sm font-medium">View all</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#FF5722" />
              <Text className="text-gray-500 mt-4">Loading places...</Text>
            </View>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredPlaces.map((place) => (
                <TouchableOpacity
                  key={place.id}
                  onPress={() => navigation.navigate('PlaceDetails', { place })}
                  className="mr-4"
                >
                  <FavoritePlaceCard
                    image={place.image}
                    title={place.title}
                    location={place.location}
                    price={place.price}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <View className="px-6 mt-6">
          <Text className="text-xl font-bold text-gray-800 mb-3">You might like</Text>
          {filteredPlaces.map((place) => (
            <TouchableOpacity
              key={place.id}
              onPress={() => navigation.navigate('PlaceDetails', { place })}
              className="flex-row items-center mb-4 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image source={{ uri: place.image }} className="w-24 h-24" resizeMode="cover" />
              <View className="flex-1 px-4 py-2">
                <Text className="text-lg font-bold text-gray-800">{place.title}</Text>
                <Text className="text-sm text-gray-500">{place.location}</Text>
                <Text className="text-lg font-bold text-orange-500">${place.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
