export type DestinationCategory = {
  id: string;
  name: string;
  icon?: string;
};

export type DestinationItem = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl?: string;
  category: string;
};

export type HomeHeroBanner = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
};
