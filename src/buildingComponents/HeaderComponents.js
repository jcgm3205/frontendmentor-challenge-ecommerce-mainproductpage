import styled from "styled-components";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const CustomHeader = styled.header`

    height: 4.25rem;
    padding: 0 7.5%;
    padding-bottom: 25px;

    display: flex;
    align-items: flex-end;

    position: relative;

    @media screen and (min-width: 900px) {
        height: 12.666667vh;
        width: 77%;
        margin: 0 auto;
        border-bottom: 1px solid var(--grayish-blue);

        padding: 0;
        align-items: center;        
    }    
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const HeaderAvatar = styled.img`
    height: 1.5rem;
    width: 1.5rem;

    border-radius: 50%;
    
    @media screen and (min-width: 900px) {
        width: 3.25rem;
        height: 3.25rem;

        border: 2px solid transparent;
        transition: border 0.2s ease-out;

        cursor: pointer;
        
        &:hover{
            border-color: var(--orange);
        }
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const HeaderBurgerBtn = styled.button`
    padding: 0;
    border: none;
    margin-right: 1rem;

    background-color: var(--white);

    height: 15px;
    
    img{
        width: 16px;
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const HeaderLogo = styled.img`
    height: 20px;
    margin-right: auto;
    
    @media screen and (min-width: 900px) {
        margin-right: 4.027778vw;
    }
`