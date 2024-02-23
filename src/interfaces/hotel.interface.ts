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
}

// todo: all params!
export interface IHotelSearchParams {
  min?: number;
  max?: number;
  limit?: number;
}
