import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { TabNavigator } from "./tab-navigator";
import { VStack } from "@/ui/atom";
import { Text } from "moti";

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
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
