import { useLocalSearchParams } from 'expo-router';

import { NewsDetailScreen } from '@/features/news/screens/NewsDetailScreen';

export default function NewsDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <NewsDetailScreen id={id} />;
}
