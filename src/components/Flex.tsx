import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '@components/ThemeProvider.tsx';

interface FlexProps extends ViewProps {
  direction?: ViewStyle['flexDirection'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flexWrap?: ViewStyle['flexWrap'];
  alignContent?: ViewStyle['alignContent'];
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  style?: StyleProp<ViewStyle>;
}

const Flex = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexWrap = 'nowrap',
  alignContent = 'flex-start',
  gap,
  rowGap,
  columnGap,
  style,
  children,
  ...props
}: FlexProps) => {
  const { colors } = useTheme();

  const defaultStyle: ViewStyle = {
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
    gap,
    rowGap,
    columnGap,
    backgroundColor: (style as ViewStyle)?.backgroundColor ?? colors.background,
  };

  const styles = StyleSheet.compose(defaultStyle, style);

  return (
    <View style={styles} {...props}>
      {children}
    </View>
  );
};

export default Flex;
