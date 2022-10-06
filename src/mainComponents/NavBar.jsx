import React from "react";

import { useLibrary } from "../context/libraryContext";
import { CustomNavBar, 
         NavBarCloseBtn,
         NavBarLinkContainer,
         NavBarItem,
         NavBarLink  } from "../buildingComponents/NavBarComponents";

import { CLOSE } from "../productData/images";         

export default function NavBar(){

    const {isOpen, modifyOpenState} = useLibrary();

    function handleClose(){
        modifyOpenState();
        document.body.style.overflow = "visible";
    }

    return(
        <CustomNavBar open={isOpen}>
            <NavBarCloseBtn onClick={ handleClose }>
                <img src={CLOSE} alt="close icon"  />
            </NavBarCloseBtn>
            <NavBarLinkContainer>
                <NavBarItem>
                    <NavBarLink href="#" >Collections</NavBarLink>
                </NavBarItem>
                <NavBarItem>
                    <NavBarLink href="#" >Men</NavBarLink>
                </NavBarItem>
                <NavBarItem>
                    <NavBarLink href="#" >Women</NavBarLink>
                </NavBarItem>
                <NavBarItem>
                    <NavBarLink href="#" >About</NavBarLink>
                </NavBarItem>
                <NavBarItem>
                    <NavBarLink href="#" >Contact Us</NavBarLink>
                </NavBarItem>                                
            </NavBarLinkContainer>
        </CustomNavBar>
    );
}