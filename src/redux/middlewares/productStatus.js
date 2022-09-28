// Product Stock Status middleware
const productStatus = (store) => (next) => (action) => {
    
    const state = store.getState();

    if(action.type === 'products/decrement'){
        const itemIndex = state.products.findIndex((product)=> product.id === action.payload && product.available_qty === 0);
        if((itemIndex === -1)){
            return next(action);
        }
        return null;
    
    }
    if(action.type === 'carts/increment'){
        const itemIndex = state.carts.findIndex((product)=> product.id === action.payload.id && product.available_qty === product.total_qty);
        if((itemIndex === -1)){
            return next(action);
        }
        return null;
    
    }

    return next(action);

};

export default productStatus;
