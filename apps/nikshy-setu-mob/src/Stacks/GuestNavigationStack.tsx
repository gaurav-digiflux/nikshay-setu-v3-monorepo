import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardingScreen } from '../screens/boardingScreen';
import { HomeScreen } from '../screens/homeScreen';

const Stack = createNativeStackNavigator();

export const AppNavigationGuest = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='LogIn'
    >
      <Stack.Screen
        name='LogIn'
        component={BoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='homeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
