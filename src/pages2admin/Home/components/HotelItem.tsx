import { IHotel } from "@/interfaces/hotel.interface";

const HotelItem = ({ data }: { data: IHotel }) => {
  return (
    <li>
      HotelItem: {data.name} - {data.city}
    </li>
  );
};

export default HotelItem;
