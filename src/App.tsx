import {Text, View} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {ThemeProvider} from '@components/ThemeProvider.tsx';
import Typography from '@components/Typography.tsx';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView>
        <ThemeProvider>
          <View style={{backgroundColor: 'red'}}>
            <Typography>gd</Typography>
          </View>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
