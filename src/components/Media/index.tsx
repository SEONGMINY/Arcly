import ImageView from '@/components/Media/ImageView';
import VideoView from '@/components/Media/VideoView';
import getMediaType, { MediaType } from '@/utils/getMediaType';
import React, { memo } from 'react';

interface MediaProps {
  uri: string;
}

const MediaComponents: Record<MediaType, React.FC<MediaProps>> = {
  [MediaType.VIDEO]: VideoView,
  [MediaType.IMAGE]: ImageView,
  [MediaType.UNKNOWN]: () => null,
};

const Media = ({ uri }: MediaProps) => {
  if (!uri) {
    return null;
  }

  const mediaType = getMediaType(uri);
  const MediaComponent = MediaComponents[mediaType];

  return <MediaComponent uri={uri} />;
};

export default memo(Media);
