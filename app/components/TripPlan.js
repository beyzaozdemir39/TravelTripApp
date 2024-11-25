import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const TripPlan = ({ tripPlan }) => {
  if (!tripPlan || tripPlan.length === 0) {
    return <Text className="text-gray-500">No trip plan available for this place.</Text>;
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {tripPlan.map((step, index) => (
        <View
          key={index}
          className="bg-gray-100 p-4 rounded-lg items-center mr-4 shadow-md"
        >
          <Text className="text-sm font-bold text-gray-800">{step.time}</Text>
          <Text className="text-sm text-gray-600 text-center">{step.activity}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TripPlan;
