import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useIsFirstTime } from '@/hooks';
import { Onboarding } from '@/screens';
import { useAuth } from '@/store/auth';

import { AppNavigator } from './app-navigator';
import { AuthNavigator } from './auth-navigator';
import { NavigationContainer } from './navigation-container';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth((state) => state.status);
  const [isFirstTime] = useIsFirstTime();

  // const hideSplash = React.useCallback(async () => {
  //   //await SplashScreen.hideAsync();
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : status === 'signOut' ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="App" component={AppNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
