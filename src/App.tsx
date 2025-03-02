import {Text, View} from 'react-native';
import {ThemeProvider} from './components/ThemeProvider.tsx';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ThemeProvider>
          <View style={{backgroundColor: 'red'}}>
            <Text>gd</Text>
          </View>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
