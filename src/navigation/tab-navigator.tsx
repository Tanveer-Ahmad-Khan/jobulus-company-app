import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';

import { Settings } from '@/screens';

type TabParamList = {
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        r
        <Tab.Screen
          name={'Settings'}
          component={Settings}
          options={{
            title: 'Setting',
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
