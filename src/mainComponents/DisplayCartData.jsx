import React from 'react';

import { CartDataContainer, 
         CartItem,
         ProductThumbnail,
         CartItemTextCont,
         CartCheckoutBtnCont,
         DeleteButton } from '../buildingComponents/ShopCartComponents';
import { AddCartBtn } from '../buildingComponents/AddCartBtn';
import { useLibrary } from '../context/libraryContext';
import { DELETE } from '../productData/images';         

export default function DisplayCartData({data}) {

    const cond = data.length;
    const { cartDispatch } = useLibrary();

    function handleDelete(input){
        cartDispatch({
            type: "DELETE_FROM_CART",
            payload: input
        });

        cartDispatch({
            type: "COMPUTE_COUNT"
        });
    }

    return (
        <>
            <CartDataContainer cond={cond}>
                {data.map((product, index) => (
                    <CartItem   key={`item 0${index + 1}`} >
                        <ProductThumbnail src={`../../${product.thumbnail}`} alt="Product thumbnail" />                                                
                        <CartItemTextCont className="cart-item-text-cont">
                            <p>{product.prodName}</p>
                            <p>${product.prodFinalp} <span className='times-sign' >&times;</span> {product.quantity} <span className='text-bold'>${product.subtotal}</span> </p>                            
                        </CartItemTextCont>
                        <DeleteButton onClick={() => handleDelete(index)}>
                            <img src={DELETE} alt="Trash bin icon" />
                        </DeleteButton>                        
                    </CartItem>                
                ))}
            </CartDataContainer>
            <CartCheckoutBtnCont>
                <AddCartBtn className='checkout-btn'>
                    Checkout
                </AddCartBtn>
            </CartCheckoutBtnCont>
        </>
    );
}
