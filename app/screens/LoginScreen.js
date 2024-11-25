import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = "test@gmail.com";
  const validPassword = "123456";

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password cannot be empty!");
      return;
    }

    if (email === validEmail && password === validPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert("Error", "Invalid email or password!");
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        <Text className="text-center text-2xl font-bold mb-8">Login</Text>

        <View className="mb-4">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-lg py-3 px-4 w-full"
          />
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border border-gray-300 rounded-lg py-3 px-4 w-full"
          />
        </View>

        <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Reset password link sent!")}>
          <Text className="text-orange-500 text-right mb-6">Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          className="bg-orange-500 py-3 rounded-lg w-full items-center mb-6"
        >
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-500 mb-4">Or login with social account</Text>

        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity className="border border-gray-300 rounded-full p-4">
            <Image
              source={{
                uri: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png',
              }}
              className="h-6 w-6"
            />
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 rounded-full p-4">
            <Image
              source={{
                uri: 'https://banner2.cleanpng.com/20180713/huy/aawa951nk.webp',
              }}
              className="h-6 w-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
