import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

interface FlexProps extends ViewProps {
  flex?: ViewStyle['flex'];
  direction?: ViewStyle['flexDirection'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flexWrap?: ViewStyle['flexWrap'];
  alignContent?: ViewStyle['alignContent'];
  backgroundColor?: ViewStyle['backgroundColor'];
  width?: ViewStyle['width'];
  minWidth?: ViewStyle['minWidth'];
  maxWidth?: ViewStyle['maxWidth'];
  height?: ViewStyle['height'];
  minHeight?: ViewStyle['minHeight'];
  maxHeight?: ViewStyle['maxHeight'];
  padding?: ViewStyle['padding'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingRight?: ViewStyle['paddingRight'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  margin?: ViewStyle['margin'];
  marginLeft?: ViewStyle['marginLeft'];
  marginRight?: ViewStyle['marginRight'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginVertical?: ViewStyle['marginVertical'];
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  style?: StyleProp<ViewStyle>;
}

const Flex = ({
  flex,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexWrap = 'nowrap',
  alignContent = 'flex-start',
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,
  gap,
  rowGap,
  columnGap,
  style,
  ...props
}: FlexProps) => {
  const defaultStyle: ViewStyle = {
    flex,
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingHorizontal,
    paddingVertical,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginVertical,
    gap,
    rowGap,
    columnGap,
  };

  const styles = StyleSheet.compose(defaultStyle, style);

  return <View style={styles} {...props} />;
};

export default Flex;
