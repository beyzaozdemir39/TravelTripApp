import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import BottomBar from '../components/BottomBar';

const BookingScreen = ({ navigation, route }) => {
  const { place } = route.params;

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState('25 Dec 2023');
  const [endDate, setEndDate] = useState('30 Dec 2023');

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const clearFields = () => {
    setAdults(0);
    setChildren(0);
    setStartDate('25 Dec 2023');
    setEndDate('30 Dec 2023');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-200 bg-white">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-2xl text-gray-800">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">{place?.title || 'Booking'}</Text>
      </View>

      <ScrollView className="flex-1 px-4 mt-4">
        <View className="bg-white rounded-xl p-4 shadow-md mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Dates</Text>
            <TouchableOpacity onPress={clearFields}>
              <Text className="text-orange-500">Clear</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-sm text-gray-500">From</Text>
              <Text className="text-lg text-gray-800">{startDate}</Text>
            </View>
            <Text className="text-2xl text-gray-400">→</Text>
            <View>
              <Text className="text-sm text-gray-500">To</Text>
              <Text className="text-lg text-gray-800">{endDate}</Text>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-xl p-4 shadow-md mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Travellers</Text>
            <TouchableOpacity onPress={clearFields}>
              <Text className="text-orange-500">Clear</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-sm text-gray-800">Adults</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="bg-gray-200 p-2 rounded-full"
                onPress={() => handleDecrement(setAdults, adults)}
              >
                <Text className="text-xl text-gray-800">−</Text>
              </TouchableOpacity>
              <Text className="mx-4 text-lg">{adults}</Text>
              <TouchableOpacity
                className="bg-gray-200 p-2 rounded-full"
                onPress={() => handleIncrement(setAdults, adults)}
              >
                <Text className="text-xl text-gray-800">+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-gray-800">Children</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="bg-gray-200 p-2 rounded-full"
                onPress={() => handleDecrement(setChildren, children)}
              >
                <Text className="text-xl text-gray-800">−</Text>
              </TouchableOpacity>
              <Text className="mx-4 text-lg">{children}</Text>
              <TouchableOpacity
                className="bg-gray-200 p-2 rounded-full"
                onPress={() => handleIncrement(setChildren, children)}
              >
                <Text className="text-xl text-gray-800">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-xl p-4 shadow-md mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Popular places</Text>
            <TouchableOpacity>
              <Text className="text-orange-500">Clear</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center">
            <Image
              source={{ uri: place?.image }}
              className="w-20 h-20 rounded-lg mr-4"
              resizeMode="cover"
            />
            <View>
              <Text className="text-sm font-bold text-gray-800">
                Discount 20% for Lorem Customers
              </Text>
              <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-full mt-1">
                <Text className="text-white text-sm font-bold">Use</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="bg-white px-4 py-4 border-t border-gray-200 flex-row justify-between items-center shadow-md">
        <Text className="text-lg font-bold text-gray-800">
          Order Now - ${place?.averageCost ? place.averageCost.toFixed(2) : '0.00'}
        </Text>
        <TouchableOpacity className="bg-orange-500 px-6 py-3 rounded-full">
          <Text className="text-white font-bold">Order Now</Text>
        </TouchableOpacity>
      </View>

      <BottomBar navigation={navigation} />
    </View>
  );
};

export default BookingScreen;