import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/pages/Splash';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import BemVindo from './src/pages/BemVindo';
import Home from './src/pages/Home';
import Territorio01 from './src/pages/Territorio01';
import Territorio02 from './src/pages/Territorio02';
import Territorio03 from './src/pages/Territorio03';
import Territorio04 from './src/pages/Territorio04';
import Territorio05 from './src/pages/Territorio05';
import Territorio06 from './src/pages/Territorio06';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#245A43" />
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerStyle: { backgroundColor: '#245A43' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontWeight: '800' }, contentStyle: { backgroundColor: '#F8F6ED' } }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Criar perfil' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Entrar' }} />
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ title: 'Zoolândia', headerBackVisible: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Explorar' }} />
        <Stack.Screen name="Territorio01" component={Territorio01} options={{ title: 'Savana' }} />
        <Stack.Screen name="Territorio02" component={Territorio02} options={{ title: 'Floresta' }} />
        <Stack.Screen name="Territorio03" component={Territorio03} options={{ title: 'Oceano' }} />
        <Stack.Screen name="Territorio04" component={Territorio04} options={{ title: 'Geleira' }} />
        <Stack.Screen name="Territorio05" component={Territorio05} options={{ title: 'Deserto' }} />
        <Stack.Screen name="Territorio06" component={Territorio06} options={{ title: 'Pantanal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
