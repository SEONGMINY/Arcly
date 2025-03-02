import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { ThemeProvider } from '@components/ThemeProvider.tsx';
import Typography from '@components/Typography.tsx';
import Flex from '@components/Flex.tsx';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <Flex>
            <Typography>gd</Typography>
            <Typography>gd</Typography>
          </Flex>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
