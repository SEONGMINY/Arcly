import { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Video, { VideoRef, OnBufferData } from 'react-native-video';

interface VideoViewProps {
  uri: string;
}

const { width: screenWidth } = Dimensions.get('window');
const FEED_VIDEO_WIDTH = screenWidth - 76;
const VIDEO_HEIGHT = 201;

const VideoView = ({ uri }: VideoViewProps) => {
  const videoRef = useRef<VideoRef>(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onBuffer = (buffer: OnBufferData) => {
    console.log('Buffering:', buffer);
  };

  const onError = (e: any) => {
    console.error('Video error:', e);
    setErrorMessage(JSON.stringify(e));
    setError(true);
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>동영상을 불러올 수 없습니다</Text>
        <Text style={styles.errorDetails}>{errorMessage}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri }}
        ref={videoRef}
        onBuffer={onBuffer}
        onError={onError}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: FEED_VIDEO_WIDTH,
    height: VIDEO_HEIGHT,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  errorContainer: {
    width: FEED_VIDEO_WIDTH,
    height: VIDEO_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  errorDetails: {
    fontSize: 10,
    color: '#777',
    maxWidth: '90%',
    marginTop: 8,
  },
});

export default VideoView;
