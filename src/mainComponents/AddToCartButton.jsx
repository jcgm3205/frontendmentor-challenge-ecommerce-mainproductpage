import React from 'react';

import { AddCartBtn } from '../buildingComponents/AddCartBtn';
import { CART } from '../productData/images';
import { useLibrary } from '../context/libraryContext';

export default function AddToCartButton({data}) {

    const { cartState, cartDispatch, counterState } = useLibrary();
    const { counter } = counterState;

    function addProdToCart(){

        cartDispatch({
            type: "ADD_TO_CART",
            payload: {
                prodID: data.id,
                prodName: data.prodName,
                quantity: counter,
                prodFinalp: data.prodFinalp,
                subtotal: parseFloat( parseFloat(data.prodFinalp)*counter).toFixed(2),
                thumbnail: data.images[0].thumbPath
            }
        });

        cartDispatch({
            type: "COMPUTE_COUNT"
        })
    }

    return (
        <AddCartBtn onClick={addProdToCart}>
            <img src={CART} alt="cart icon" />
            Add to cart
        </AddCartBtn>
    );
}
