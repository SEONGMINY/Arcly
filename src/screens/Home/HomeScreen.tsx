import Card from '@components/Card';
import Container from '@components/Container.tsx';
import { FlatList } from 'react-native';
import { MEDIA_URLS } from '@constants/urls';

const HomeScreen = () => {
  const cards = MEDIA_URLS;
  return (
    <Container.SafeArea>
      <FlatList data={cards} renderItem={({ item, index }) => <Card key={index} uri={item} />} />
    </Container.SafeArea>
  );
};

export default HomeScreen;
