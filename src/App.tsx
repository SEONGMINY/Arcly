import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { ThemeProvider } from '@components/ThemeProvider.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE_PATH } from '@constants/route.ts';
import HomeStack from '@screens/Home/HomeStack.tsx';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <ThemeProvider>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={ROUTE_PATH.Home} component={HomeStack} />
          </Tab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
