import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function CartReducer(state, action){
    if(action.type === 'ADD_ITEM'){

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )

        const updateItems = [...state.items];

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex]
            const updateItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updateItems[existingCartItemIndex] = updateItem
        } else {
            updateItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updateItems}

    }

    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )

        const existingCartItem = state.items[existingCartItemIndex];

        const updateItems = [...state.items];

        if(existingCartItem.quantity === 1){
            updateItems.splice(existingCartItemIndex, 1)
        } else {
            const updateItem = {...existingCartItem, quantity: existingCartItem.quantity -1};
            updateItems[existingCartItemIndex] = updateItem;
        }

        return {...state, items: updateItems}
    }

    return state;
}

export function CartContextProvider({children}){
    const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] })
    
    function addItem(item){
        dispatchCartAction({ type: 'ADD_ITEM', item});
    }
    
    function removeItem(id){
        dispatchCartAction({ type: 'REMOVE_ITEM', id})
    }
    
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    // console.log(cartContext)

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;