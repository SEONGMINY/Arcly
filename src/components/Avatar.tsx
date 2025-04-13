import { Image, ImageProps, ImageStyle } from 'react-native';
import { useTheme } from '@components/ThemeProvider.tsx';

interface AvatarProps extends ImageProps {
  imageUri?: string;
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}

const DEFAULT_SIZE = 36;
const DEFAULT_URI =
  'https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png';

const Avatar = ({ imageUri, width, height, ...props }: AvatarProps) => {
  const { colors } = useTheme();
  const defaultStyle: ImageStyle = {
    objectFit: 'cover',
    borderRadius: '50%',
    borderColor: colors['themes-border-border-muted'],
    borderWidth: 1,
  };
  const sizeStyle: ImageStyle = { width: width ?? DEFAULT_SIZE, height: height ?? DEFAULT_SIZE };

  return (
    <Image style={[defaultStyle, sizeStyle]} source={{ uri: imageUri ?? DEFAULT_URI }} {...props} />
  );
};

export default Avatar;
