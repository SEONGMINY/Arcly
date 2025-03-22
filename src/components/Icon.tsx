import * as Icons from '@assets/icons';
import { SvgProps } from 'react-native-svg';
import { useTheme } from '@components/ThemeProvider.tsx';

interface IconProps extends SvgProps {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  variant?: 'filled' | 'outlined';
}

const Icon = ({
  name,
  color: _color,
  width: _width,
  height: _height,
  size = 24,
  variant = 'filled',
  ...props
}: IconProps) => {
  const { colors } = useTheme();

  const Component = Icons[name];
  const color = _color ?? colors['themes-icon-icon'];
  const width = _width ?? size;
  const height = _height ?? size;
  const variantProps = {
    filled: { fill: color },
    outlined: { stroke: color },
  };
  const iconProps = {
    width,
    height,
    ...variantProps[variant],
    ...props,
  };

  return <Component {...iconProps} />;
};

export default Icon;
