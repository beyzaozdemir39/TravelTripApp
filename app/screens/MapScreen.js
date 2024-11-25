import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import BottomBar from '../components/BottomBar';

const MapScreen = ({ navigation }) => {
  // Edirne'nin koordinatları verildi.
  const edirneRegion = {
    latitude: 41.6768, 
    longitude: 26.5557, 
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={edirneRegion}
      />

      <View style={{ 
        position: 'absolute', 
        top: 10, 
        left: 10, 
        right: 10, 
        backgroundColor: 'white', 
        borderRadius: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>←</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
          Explore Edirne
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 24, color: '#888' }}>•••</Text>
        </TouchableOpacity>
      </View>

      <BottomBar navigation={navigation} />
    </View>
  );
};

export default MapScreen;
