import type { DestinationCategory, DestinationItem, HomeHeroBanner } from '../types';

export const MOCK_HERO_BANNER: HomeHeroBanner = {
  id: 'banner-1',
  title: 'Explore the World with Nomadly',
  subtitle: 'Find your dream stay and workspace anywhere',
};

export const MOCK_CATEGORIES: DestinationCategory[] = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Beach' },
  { id: '3', name: 'Mountain' },
  { id: '4', name: 'Co-working' },
  { id: '5', name: 'Villa' },
];

export const MOCK_POPULAR_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-1',
    title: 'Ubud Jungle Retreat',
    location: 'Bali, Indonesia',
    price: 750000,
    rating: 4.9,
    category: 'Villa',
  },
  {
    id: 'dest-2',
    title: 'Canggu Nomad Haven',
    location: 'Bali, Indonesia',
    price: 550000,
    rating: 4.8,
    category: 'Co-working',
  },
  {
    id: 'dest-3',
    title: 'Lombok Hilltop Villa',
    location: 'Lombok, Indonesia',
    price: 900000,
    rating: 4.95,
    category: 'Beach',
  },
];
