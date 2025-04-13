import { getImageSize } from '@/utils/imageSIze';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image } from 'react-native';

interface ImageViewProps {
  uri: string;
}

const { width: screenWidth } = Dimensions.get('window');
const FEED_IMAGE_WIDTH = screenWidth - 76;

const ImageView = ({ uri }: ImageViewProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadImageSize = async () => {
      try {
        setLoading(true);
        const imageSize = await getImageSize(uri, FEED_IMAGE_WIDTH);
        if (isMounted) {
          setSize(imageSize);
        }
      } catch (error) {
        console.error('Failed to load image size:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadImageSize();

    return () => {
      isMounted = false;
    };
  }, [uri]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Image source={{ uri }} style={{ width: size.width, height: size.height }} resizeMode="cover" />
  );
};

export default ImageView;
