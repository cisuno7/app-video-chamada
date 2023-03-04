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
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppContainer;

