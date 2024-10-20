import React from 'react';

interface CardProps {
  image: string;
  location: string;
  price: number;
  onBooking: () => void;
}

const CardComponent: React.FC<CardProps> = ({ image, location, price, onBooking }) => {
  return (
    <div className="bg-white/10 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 h-[290px] w-[300px]">
      <img 
        alt="billboard" 
        src={image} 
        className="w-full h-40 object-cover bg-transparent" 
      />
      <div className="p-4">
        <h3 className="text-sm overflow-hidden h-[22px]">{location}</h3>
        <p className="">Rental Price: {price}/day</p>
        <button 
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200" 
          onClick={onBooking}
        >
          Booking
        </button>
       
      </div>
    </div>
  );
};

export default CardComponent;
