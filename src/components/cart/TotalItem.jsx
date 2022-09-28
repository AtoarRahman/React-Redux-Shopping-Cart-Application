import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalItem() {
  const cartProducts = useSelector((state)=>state.carts);

  const totalQty = cartProducts.reduce(((total, product)=>product.total_qty + total), 0)

  return (
    <div className="flex justify-center items-center text-center" >
        <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalQty}</p>
        </div>
    </div>
  )
}
