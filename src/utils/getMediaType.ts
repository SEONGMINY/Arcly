export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  UNKNOWN = 'unknown',
}

const MEDIA_EXTENSIONS: Record<MediaType, string[]> = {
  [MediaType.IMAGE]: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'],
  [MediaType.VIDEO]: ['mp3', 'mp4', 'mov', 'avi', 'wmv', 'mkv', 'flv'],
  [MediaType.UNKNOWN]: [],
};

const getUrlExtension = (uri: string): string => {
  return uri.split('.').pop()?.toLowerCase() || '';
};

const getMediaType = (uri: string): MediaType => {
  if (!uri) {
    return MediaType.UNKNOWN;
  }

  const extension = getUrlExtension(uri);

  if (MEDIA_EXTENSIONS[MediaType.IMAGE].includes(extension)) {
    return MediaType.IMAGE;
  }

  if (MEDIA_EXTENSIONS[MediaType.VIDEO].includes(extension)) {
    return MediaType.VIDEO;
  }

  return MediaType.UNKNOWN;
};

export default getMediaType;
