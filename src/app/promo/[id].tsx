import { useLocalSearchParams } from 'expo-router';

import { PromoDetailScreen } from '@/features/promos/screens/PromoDetailScreen';

export default function PromoDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <PromoDetailScreen id={id} />;
}
