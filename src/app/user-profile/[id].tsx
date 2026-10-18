import { useLocalSearchParams } from 'expo-router';

import { PublicProfileScreen } from '@/features/profile/screens';

export default function UserProfileRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <PublicProfileScreen userId={id} />;
}
