import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const BottomBar = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center bg-white py-4 px-8 shadow-md">
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
        <Text className="text-orange-500 text-xl">🏠</Text>
        <Text className="text-sm text-gray-600">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
        <Text className="text-gray-400 text-xl">🔍</Text>
        <Text className="text-sm text-gray-600">Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
        <Text className="text-gray-400 text-xl">📅</Text>
        <Text className="text-sm text-gray-600">Trips</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} className="items-center">
        <Text className="text-gray-400 text-xl">👤</Text>
        <Text className="text-sm text-gray-600">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
