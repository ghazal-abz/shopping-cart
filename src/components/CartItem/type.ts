export interface CartItemProps {
    id: number;
    title: string;
    img: string;
    quantity: number;
    price: number;
}
export interface items {
    item?: Array<CartItemProps>;
}
