import Flex from '@components/Flex.tsx';
import Typography from '@components/Typography.tsx';
import Avatar from '@components/Avatar.tsx';
import { useTheme } from '@components/ThemeProvider.tsx';
import Icon from '@components/Icon.tsx';
import Media from '@/components/Media';

/**
 * TODO LIST
 */
interface CardProps {
  contents: string;
  profileName: string;
  profileImageUri?: string;
  createdAt: string;
  media?: string[];
  isLiked?: boolean;
  likeCounts?: number;
  commentCounts?: number;
  repostCounts?: number;
  shareCounts?: number;
  private?: boolean;
}

const Card = ({ uri }: { uri: string }) => {
  const { colors } = useTheme();

  const containerStyle = {
    borderBottomWidth: 1,
    borderBottomColor: colors['themes-border-border-muted'],
  };

  return (
    <Flex paddingTop={8} paddingLeft={12} paddingRight={9} columnGap={10} style={containerStyle}>
      <Avatar />
      <Flex flex={1} direction={'column'} gap={5}>
        <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography numberOfLines={1} variant={'medium'} style={{ maxWidth: '70%' }}>
            LEESEONGMIN
          </Typography>
          <Flex alignItems={'center'} gap={10}>
            <Typography variant={'caption'} color={colors['themes-text-text-muted']}>
              14m
            </Typography>
            <Icon name={'Dots'} />
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={8}>
          <Typography>Hello World</Typography>
          <Media uri={uri} />
        </Flex>
        <Flex gap={12} paddingVertical={12}>
          <Icon name={'Heart'} variant={'outlined'} />
          <Icon name={'Comment'} variant={'outlined'} />
          <Icon name={'Repost'} variant={'outlined'} />
          <Icon name={'Share'} variant={'outlined'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
