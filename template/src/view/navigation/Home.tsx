import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '~/view/screens/Home';

const screenOptions = {
  gestureEnabled: true,
  headerShown: false,
};

const HomeStack = createStackNavigator();

export const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);
