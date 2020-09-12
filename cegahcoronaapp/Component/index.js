import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import About from './About';
import HomeScreen from './HomeScreen';
import IndoDetails from './IndoDetails';
import GlobalDetails from './GlobalDetails';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='About' component={About} options={{ headerShown: false }}/>
          <Stack.Screen name='Details - Indo' component={IndoDetails} options={{ headerShown: false }}/>
          <Stack.Screen name='Details - Global' component={GlobalDetails} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}