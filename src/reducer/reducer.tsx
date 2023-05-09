// type AppState = typeof initialStat;
// type Action = { type: 'CLEAR_CART' , payload: string};


const reducer = (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case 'CLEAR_CART': {
            return {...state, cart: []}
        }

        case 'REMOVE': {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }
        }

        case 'CHANGE_QUANTITY': {
            const tempCart  = state.cart.map(item => {
                if (item.id === payload.id && payload.quantity > 0) {
                    return {...item, quantity: payload.quantity}
                }
                return item;
            })
            return {...state, cart: tempCart}
        }

        case 'GET_TOTALS': {
            let {total, quantity} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, quantity} = cartItem;
                const itemTotal = price * quantity;
                cartTotal.total +=itemTotal;
                cartTotal.quantity += quantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });

            return {...state, total, quantity}
        }
    }

}

export default reducer;
