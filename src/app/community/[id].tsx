import { useLocalSearchParams } from 'expo-router';

import { CommunityDetailScreen } from '@/features/community/screens/CommunityDetailScreen';

export default function CommunityDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <CommunityDetailScreen id={id} />;
}
