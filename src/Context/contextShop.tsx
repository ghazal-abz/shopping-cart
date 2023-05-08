import {useContext, useReducer} from "react";
import { createContext } from "react";
import reducer from "../Reducer/reducer";
import cartItem from '../data';

const CartContext = createContext();

const initialState = {
    loading: false,
    cart: cartItem,
    amount: 0,
    total: 0
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.provider value={{...state}}>

            {children}

        </CartContext.provider>
    )
}

const useCartContext = () => {

    return useContext(CartContext)

}

export {useCartContext, CartProvider};
