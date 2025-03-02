import {Text, View} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {ThemeProvider} from '@components/ThemeProvider.tsx';

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
