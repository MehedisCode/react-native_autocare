import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import LogInScreen from './screens/LogInScreen';
import Records from './screens/Records';
import ScheduleScreen from './screens/ServiceBooking/ScheduleScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import Workshop from './screens/WorkShop';

export type RootStackParamList = {
  SplashScreen: undefined;
  LogInScreen: undefined;
  SignUpScreen: undefined;
  Home: undefined;
  WorkShop: undefined;
  Records: undefined;
  ScheduleScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WorkShop" component={Workshop} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Records" component={Records} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
