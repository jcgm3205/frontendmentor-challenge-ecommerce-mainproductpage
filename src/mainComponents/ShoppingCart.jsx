import React, {useState} from "react";

import { CART } from "../productData/images";
import { ShopCartWindow, 
         TitleContainer,
         CartEmptyContainer,
         CartBadge,
         HeaderCartCompContainer,
         HeaderCart } from "../buildingComponents/ShopCartComponents";
import { useLibrary } from "../context/libraryContext";
import DisplayCartData from "./DisplayCartData";

export default function ShoppingCart(){

    //----------------------------------------------------------

    const [cartOpen, setCartOpen] = useState(false);
    function handleCartOpen(){
        setCartOpen(!cartOpen);
    }

    //----------------------------------------------------------

    const { cartState } = useLibrary();
    const { cart, totalProductsCount } = cartState;

    //----------------------------------------------------------

    return(
        <HeaderCartCompContainer>
            <div className="shopcart-wrapper">
                <HeaderCart onClick={handleCartOpen}>
                    <img src={CART} alt="cart icon" />
                </HeaderCart>
                { totalProductsCount !== 0 && <CartBadge>{totalProductsCount}</CartBadge>}
            </div>              
            <ShopCartWindow cartOpen={cartOpen}
                            className="shop-cart-window">
                <TitleContainer>
                    <h2 >Cart</h2>
                </TitleContainer>               
                  { cart.length === 0 ? <CartEmptyContainer><p>Your cart is empty.</p></CartEmptyContainer> 
                                    : <DisplayCartData data={cart} /> }    
            </ShopCartWindow> 
        </HeaderCartCompContainer>
    );
}