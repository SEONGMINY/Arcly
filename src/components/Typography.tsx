import { Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@components/ThemeProvider.tsx';

interface TypographyProps extends TextProps {
  variant?: keyof typeof variants;
  color?: string;
  fontSize?: TextStyle['fontSize'];
}

const Typography = ({
  variant = 'default',
  color,
  fontSize,
  children,
  style,
  ...props
}: TypographyProps) => {
  const { colors } = useTheme();
  const variantStyle = variants[variant];
  const colorStyle = color ? { color } : { color: colors['themes-text-text'] };
  const fontSizeStyle = fontSize ? { fontSize } : {};

  return (
    <Text style={[colorStyle, variantStyle, fontSizeStyle, style]} {...props}>
      {children}
    </Text>
  );
};

const BASE: TextStyle = {
  fontSize: 16,
};

const BOLD: TextStyle = {
  fontWeight: '700',
};

const MEDIUM: TextStyle = {
  fontWeight: '500',
};

const variants = {
  default: BASE,
  bold: { ...BASE, ...BOLD },
  medium: { ...BASE, ...MEDIUM },
  h1: {
    ...BOLD,
    fontSize: 40,
  },
  h2: {
    ...BOLD,
    fontSize: 32,
  },
  h3: {
    ...BOLD,
    fontSize: 30,
  },
  p1: {
    fontSize: 20,
  },
  p2: {
    fontSize: 18,
  },
  p3: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
} as const;

export default Typography;
