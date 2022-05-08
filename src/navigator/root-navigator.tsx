/**
 * Main navigator contaning nested navigators
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ScaleMeterScreen} from '../screens';

//Navigator params types
export type NavigatorParamList = {
  scaleMeter: undefined;
  home: undefined;
};

const Stack = createStackNavigator<NavigatorParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="scaleMeter" component={ScaleMeterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
