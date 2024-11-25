import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "./global.css"
import HomeScreen from './app/screens/HomeScreen';
import AllPlacesScreen from './app/screens/AllPlacesScreen';
import PlaceDetailsScreen from './app/screens/PlaceDetailsScreen';
import SplashScreen from './app/screens/SplashScreen';
import LoginScreen from './app/screens/LoginScreen';
import BookingScreen from './app/screens/BookingScreen';
import MapScreen from './app/screens/MapScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AllPlaces" component={AllPlacesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingScreen"component={BookingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MapScreen"component={MapScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}