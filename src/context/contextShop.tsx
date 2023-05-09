import {useContext, useEffect, useReducer} from "react";
import {createContext} from "react";
import reducer from "../reducer/reducer";
import cartItem from '../data/data';
import {ContextShopProp} from "./type";

const CartContext = createContext();

const initialState = {
    loading: false,
    cart: cartItem,
    amount: 0,
    total: 0
}

const CartProvider = ({children}: ContextShopProp) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    };

    const remove = (id) => {
        dispatch({type: "REMOVE", payload: id});
    };

    const changeQuantity = changeObj => {
        dispatch({type: "CHANGE_QUANTITY", payload: changeObj});
    };

    useEffect(() => {
        dispatch({type:'GET_TOTALS'});
    }, [state.cart]);

    return (
        <CartContext.Provider value={{...state, clearCart, remove, changeQuantity}}>

            {children}

        </CartContext.Provider>
    )
}

const useCartContext = () => {

    return useContext(CartContext)

}

export {CartProvider, useCartContext};
