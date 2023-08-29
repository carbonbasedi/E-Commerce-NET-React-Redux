export interface Product {
    id: number;
    name: string;
    desc: string;
    price: number;
    pictureUrl: string;
    type?: string;
    brand: string;
    quantityInStock?: number;
  }