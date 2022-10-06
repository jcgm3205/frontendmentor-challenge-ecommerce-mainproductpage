import React from "react";

import { useLibrary } from "../context/libraryContext";
import { CustomHeader, HeaderAvatar, HeaderBurgerBtn, HeaderLogo } from "../buildingComponents/HeaderComponents";
import { NavBarContainer } from "../buildingComponents/NavBarComponents"
import { MENU, LOGO, AVATAR } from "../productData/images";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default function Header(){

    const { isOpen, modifyOpenState} = useLibrary();

    function handleOpen(){
        modifyOpenState();
        document.body.style.overflow = "hidden"; 
    }

    return(
        <CustomHeader>
            <HeaderBurgerBtn onClick={ handleOpen }>
                <img src={MENU} alt="menu icon" />
            </HeaderBurgerBtn>
            <HeaderLogo src={LOGO} alt="site logo" />
            <NavBarContainer open={isOpen}>
                <NavBar />
            </NavBarContainer>  
            <ShoppingCart />
            <HeaderAvatar src={AVATAR} alt="avatar image" />
        </CustomHeader>
    );
}