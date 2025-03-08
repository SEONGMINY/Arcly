import { View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@components/ThemeProvider.tsx';

interface ContainerProps extends ViewProps {}

const SafeAreaContainer = ({ children, ...props }: ContainerProps) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: colors['themes-background-background'] }, props.style]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

const ViewContainer = ({ children, ...props }: ContainerProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={[{ flex: 1, backgroundColor: colors['themes-background-background'] }, props.style]}
      {...props}
    >
      {children}
    </View>
  );
};

const Container = {
  View: ViewContainer,
  SafeArea: SafeAreaContainer,
};

export default Container;
