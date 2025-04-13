const IMAGE_URLS = [
  'https://picsum.photos/id/30/1280/901.jpg',
  'https://picsum.photos/id/31/3264/4912.jpg',
  'https://picsum.photos/id/32/4032/3024.jpg',
  'https://picsum.photos/id/33/5000/3333.jpg',
  'https://picsum.photos/id/34/5000/3333.jpg',
  'https://picsum.photos/id/35/2758/3622.jpg',
  'https://picsum.photos/id/36/4179/2790.jpg',
  'https://picsum.photos/id/37/2000/1333.jpg',
  'https://picsum.photos/id/38/1280/960.jpg',
  'https://picsum.photos/id/39/3456/2304.jpg',
  'https://picsum.photos/id/40/4106/2806.jpg',
  'https://picsum.photos/id/41/1280/805.jpg',
  'https://picsum.photos/id/42/3456/2304.jpg',
  'https://picsum.photos/id/43/1280/831.jpg',
  'https://picsum.photos/id/44/4272/2848.jpg',
  'https://picsum.photos/id/45/4592/2576.jpg',
  'https://picsum.photos/id/46/3264/2448.jpg',
  'https://picsum.photos/id/47/4272/2848.jpg',
  'https://picsum.photos/id/48/5000/3333.jpg',
  'https://picsum.photos/id/49/1280/792.jpg',
  'https://picsum.photos/id/50/4106/2806.jpg',
  'https://picsum.photos/id/51/5000/3333.jpg',
  'https://picsum.photos/id/52/1280/853.jpg',
  'https://picsum.photos/id/53/1280/1280.jpg',
  'https://picsum.photos/id/54/3264/2176.jpg',
  'https://picsum.photos/id/55/4608/3072.jpg',
  'https://picsum.photos/id/56/2880/1920.jpg',
  'https://picsum.photos/id/57/2464/1632.jpg',
  'https://picsum.photos/id/58/1280/853.jpg',
  'https://picsum.photos/id/59/2464/1633.jpg',
];

const VIDEO_URLS = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
];

const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const MEDIA_URLS = shuffle([...IMAGE_URLS, ...VIDEO_URLS]);
