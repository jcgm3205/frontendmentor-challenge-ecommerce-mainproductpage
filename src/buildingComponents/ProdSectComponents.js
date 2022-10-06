import styled from "styled-components";

export const ProdSectContainer = styled.section`
    padding: 0 7.5%;
    padding-top: 1.25rem;

    @media screen and (min-width: 900px) {
        padding: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;        
    }
`

export const DesktopStyleContainer = styled.div`
    @media screen and (min-width: 900px){
        width: 80%;
        margin: 0 auto;        
    }
`

export const ProdSectSubtitle = styled.h2`
    margin-bottom: 1rem;

    font-size: 0.75rem;
    color: var(--orange);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;

    @media screen and (min-width: 900px) {
        margin-bottom: 1.875rem;
    }
`

export const ProdSectTitle = styled.h1`
    margin-bottom: 1.25rem;

    color: var(--very-dark-blue);

    @media screen and (min-width: 900px) {
        margin-bottom: 3.125rem;
        font-size: 3rem;
    }
`

export const ProdSectDescription = styled.p`
    margin-bottom: 1.25rem;

    font-size: 14px;
    line-height: 1.5;
    color: var(--dark-grayish-blue);

    @media screen and (min-width: 900px) {
        font-size: 1rem;
    }
`

export const PricesContainer = styled.div`
    margin-bottom: 1.25rem;

    display: flex;
    align-items: center;

    @media screen and (min-width: 900px) {
        width: 40%;
        margin-bottom: 4.444444vh;

        flex-wrap: wrap;
    }
`

export const FinalPrice = styled.p`
    margin-right: 1rem;

    font-size: 1.5rem;
    font-weight: 700;
`

export const Discount = styled.p`
    margin-right: auto;
    padding: 4px;

    border-radius: 7px;

    background-color: var(--pale-orange);
    color: var(--orange);
    font-weight: 700;

    @media screen and (min-width: 900px) {
        margin: 0;
    }
`

export const OriginalPrice = styled.p`
    color: var(--grayish-blue);
    text-decoration: line-through;

    @media screen and (min-width: 900px) {
        margin-top: 2vh;
    }
`