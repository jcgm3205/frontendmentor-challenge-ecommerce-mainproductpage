import styled from "styled-components";

export const AddCartBtn = styled.button`
    width: 100%;
    height: 3.5rem;
    padding: 0;
    border: none;
    margin-bottom: 5.5rem;

    border-radius: 10px;
    background-color: var(--orange);
    color: var(--white);
    font-size: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: opacity 0.2s ease-out;
    
    img{
        width: 1.125rem;
        margin-right: 0.875rem;

        /* https://stackoverflow.com/questions/52829623/how-to-make-a-color-white-using-filter-property-in-css */
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
    }

    &:hover{
        opacity: 0.65;
    }

    @media screen and (min-width: 900px) {
        height: 6.222222vh;
        margin-bottom: 0;

        flex: 0.6;
    }
`