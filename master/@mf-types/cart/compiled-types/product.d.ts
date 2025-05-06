export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
    quantity: number;
    cartItems: string;
}
export interface CartItems {
    cartItems: Product[];
}
