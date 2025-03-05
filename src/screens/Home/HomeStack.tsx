import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_PATH } from '@constants/route.ts';
import HomeScreen from '@screens/Home/HomeScreen.tsx';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_PATH.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
