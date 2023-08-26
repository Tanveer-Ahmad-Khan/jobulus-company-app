import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'moti';
import * as React from 'react';

import Applicants from '@/screens/applicants';
import JobDetail from '@/screens/job-detail';
import { VStack } from '@/ui/atom';

import { TabNavigator } from './tab-navigator';
const Details = () => {
  return (
    <VStack>
      <Text>hello</Text>
    </VStack>
  );
};

export type AppStackParamList = {
  TabNavigator: undefined;
  Details: { id: number };
  jobDetail: undefined;
  Applicants: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="jobDetail" component={JobDetail} />
        <Stack.Screen name="Applicants" component={Applicants} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
