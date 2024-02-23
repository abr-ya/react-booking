export interface IHotel {
  id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  distance: number;
  photos: string[];
  title: string;
  desc: string;
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
  rating?: number;
}

// todo: all params!
export interface IHotelSearchParams {
  city?: string;
  min?: string;
  max?: string;
  limit?: number;
}
