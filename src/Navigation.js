// In App.js in a new project

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import TestScreen from './screens/Test';
import Result from './screens/Result';
import {TEXTS} from './common';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor: '#FFF',
    }}>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: TEXTS.thatek}}
    />
    <MainStack.Screen
      name="Test"
      component={TestScreen}
      options={{title: TEXTS.test}}
    />
  </MainStack.Navigator>
);

const RootNavigation = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="Main" component={MainNavigation} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);
export default () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#3aad48',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
