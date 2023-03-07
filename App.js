import React from 'react';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AppContainer = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        title: 'bipix worth',
        headerStyle: {
          backgroundColor: '#286ACE',
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppContainer;

