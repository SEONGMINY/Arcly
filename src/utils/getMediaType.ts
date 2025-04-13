const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
const VIDEO_EXTENSIONS = ['mp3', 'mp4', 'mov', 'avi', 'wmv', 'mkv', 'flv'];

const getUrlExtension = (uri: string): string => {
  return uri.split('.').pop()?.toLowerCase() || '';
};

const getMediaType = (uri: string): 'image' | 'video' | 'unknown' => {
  const extension = getUrlExtension(uri);

  if (IMAGE_EXTENSIONS.includes(extension)) {
    return 'image';
  }

  if (VIDEO_EXTENSIONS.includes(extension)) {
    return 'video';
  }

  return 'unknown';
};

export default getMediaType;
