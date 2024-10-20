export interface Billboard {
    id: string;           
    owner: string;        
    address: string;      
    images: string[];     
    price: number;        
    size: string;         
    country: string;    
    city: string;         
  }
  
  export const sampleData: Billboard[] = [
    {
      id: "1",
      owner: "John Doe",
      address: "123 Main St, New York, NY",
      images: ["/billboard/bb1.jpg", "/billboard/bb2.jpg"],
      price: 500,
      size: "10x20 feet",
      country: "USA",
      city: "New York",
    },
    {
      id: "2",
      owner: "Jane Smith",
      address: "456 Market Ave, Los Angeles, CA",
      images: ["/billboard/bb2.jpg", "/billboard/bb3.jpg"],
      price: 750,
      size: "15x30 feet",
      country: "USA",
      city: "Los Angeles",
    },
    {
      id: "3",
      owner: "Bill Johnson",
      address: "789 Oak St, Chicago, IL",
      images: ["/billboard/bb1.jpg", "/billboard/bb3.jpg"],
      price: 600,
      size: "12x24 feet",
      country: "USA",
      city: "Chicago",
    },
    {
      id: "4",
      owner: "Lisa White",
      address: "101 Pine St, San Francisco, CA",
      images: ["/billboard/bb1.jpg", "/billboard/bb2.jpg"],
      price: 550,
      size: "14x28 feet",
      country: "USA",
      city: "San Francisco",
    },
    {
      id: "5",
      owner: "Tom Brown",
      address: "202 Cedar Rd, Houston, TX",
      images: ["/billboard/bb2.jpg", "/billboard/bb3.jpg"],
      price: 700,
      size: "16x32 feet",
      country: "USA",
      city: "Houston",
    },
    {
      id: "6",
      owner: "Emma Green",
      address: "303 Maple St, Miami, FL",
      images: ["/billboard/bb1.jpg", "/billboard/bb3.jpg"],
      price: 480,
      size: "10x20 feet",
      country: "USA",
      city: "Miami",
    },
    {
      id: "7",
      owner: "Michael Blue",
      address: "404 Birch Ave, Seattle, WA",
      images: ["/billboard/bb2.jpg", "/billboard/bb3.jpg"],
      price: 520,
      size: "12x24 feet",
      country: "USA",
      city: "Seattle",
    },
    {
      id: "8",
      owner: "Olivia Black",
      address: "505 Redwood Dr, Austin, TX",
      images: ["/billboard/bb1.jpg", "/billboard/bb3.jpg"],
      price: 680,
      size: "14x28 feet",
      country: "USA",
      city: "Austin",
    },
    {
      id: "9",
      owner: "Lucas Brown",
      address: "606 Elm St, Boston, MA",
      images: ["/billboard/bb2.jpg", "/billboard/bb1.jpg"],
      price: 720,
      size: "15x30 feet",
      country: "USA",
      city: "Boston",
    },
    {
      id: "10",
      owner: "Sophia Silver",
      address: "707 Walnut St, Denver, CO",
      images: ["/billboard/bb3.jpg", "/billboard/bb1.jpg"],
      price: 650,
      size: "12x24 feet",
      country: "USA",
      city: "Denver",
    },
  ];
  