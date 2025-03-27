
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 99.99,
    description: "This is product 1"
  },
  {
    id: 2,
    name: "Product 2",
    price: 149.99,
    description: "This is product 2"
  }
];

export default products;
