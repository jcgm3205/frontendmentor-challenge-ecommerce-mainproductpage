import styled from "styled-components";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const HeaderCartCompContainer = styled.div`
    height: 100%;
    margin-right: 26px;

    display: flex;
    align-items: flex-end;

    @media screen and (min-width: 900px) {
        margin-right: 2.5rem;

        position: relative;

        align-items: center;
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const HeaderCart = styled.button`
    height: 22px;
    padding: 0;
    border: none;

    background-color: transparent;

    cursor: pointer;
    
    img{
        width: 24px;
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const ShopCartWindow = styled.article`

    width: 85vw;

    background-color: var(--white);
    border-radius: 7px;
    
    z-index: ${({ cartOpen }) => cartOpen ? '1' : '0'};

    opacity: ${({ cartOpen }) => cartOpen ? '1' : '0'};
    transition: opacity 0.3s ease-out;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0.5rem);

    @media screen and (min-width: 900px) {
        width: 22.75rem;

        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);

        top: 85%;
        left: 50%;
        transform: translate(-50%, 0);
    }
`

export const TitleContainer = styled.div`
    height: 4.25rem;
    padding-left: 1.5rem;
    border-bottom: 1px solid var(--grayish-blue);

    line-height: 1;

    display: flex;
    align-items: center;

    h2{
        font-size: 1rem;
    }
`

export const CartDataContainer = styled.section`

    height: 3.125rem;
    margin: 1.5rem 0;

    overflow-y: ${({ cond }) => cond === 1 ? 'hidden' : 'scroll'};
`

export const CartItem = styled.article`

    padding: 0 1.5rem;
    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-of-type{
        margin-bottom: 0;
    }
`

export const ProductThumbnail = styled.img`
    width: 3.125rem;
    height: 3.125rem;

    border-radius: 5px;
`

export const CartItemTextCont = styled.div`

    line-height: 1.3;

    p{
        font-size: 15px;
        color: var(--dark-grayish-blue);

        .text-bold{
            color: #000;
            font-weight: 700;
        }

        .times-sign{
            font-size: 1.125rem;
        }
    }

    @media screen and (max-width: 576px) {
        width: 40vw;

        /* https://css-tricks.com/almanac/properties/t/text-overflow/ */

        p{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`

export const DeleteButton = styled.button`
    padding: 0;
    border: none;
    height: 1rem;

    cursor: pointer;
    
    background-color: transparent;
`

export const CartCheckoutBtnCont = styled.section`

    height: 5.625rem;
    padding: 0 1.5rem;

    @media screen and (min-width: 900px) {
        height: 10vh;
    }
`

//--------------------------------------------------------------

export const CartEmptyContainer = styled.section`
    
    height: calc( 6.125rem + 10vh );

    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: var(--dark-grayish-blue);
    }   
`

//--------------------------------------------------------------

export const CartBadge = styled.span`
    width: 17px;
    height: 13px;

    background-color: var(--orange);
    color: var(--white);
    border-radius: 70px;
    font-size: 10px;
    text-align: center;
    line-height: 1.3;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
`