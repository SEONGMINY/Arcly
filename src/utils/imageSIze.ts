import { Image } from 'react-native';

type ImageSize = { width: number; height: number };

const cache = new Map<string, ImageSize>();

const DEFAULT_IMAGE_SIZE = { width: 0, height: 0 };

const getCachedImageSize = async (uri: string): Promise<ImageSize> => {
  const size = cache.get(uri);

  if (!size) {
    const imageSize = await loadImageSize(uri);
    setCachedImageSize(uri, imageSize);
    return imageSize;
  }

  return size;
};

const setCachedImageSize = (uri: string, size: ImageSize) => {
  cache.set(uri, size);
};

const loadImageSize = (uri: string): Promise<ImageSize> => {
  return new Promise((resolve, reject) => {
    Image.getSize(
      uri,
      (width, height) => {
        resolve({ width, height });
      },
      (error) => {
        console.error(error);
        reject(DEFAULT_IMAGE_SIZE);
      },
    );
  });
};

export const getImageSize = async (uri: string, targetWidth: number) => {
  const { width, height } = await getCachedImageSize(uri);
  const imageWidth = Math.min(width, targetWidth);
  const imageHeight = (imageWidth / width) * height;

  return { width: imageWidth, height: imageHeight };
};
