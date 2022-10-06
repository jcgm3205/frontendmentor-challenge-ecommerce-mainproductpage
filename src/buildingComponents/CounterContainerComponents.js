import styled from "styled-components";

export const CounterWrapper = styled.div`
    width: 100%;
    height: 3.5rem;
    padding: 0 1.625rem;
    margin-bottom: 1.25rem;

    border-radius: 10px;
    background-color: var(--light-grayish-blue);

    display: flex;
    align-items: center;
    justify-content: space-between; 
    
    @media screen and (min-width: 900px) {
        height: 6.222222vh;
        padding: 0 1rem;
        margin-bottom: 0;

        flex: 0.35;
    }
`

export const CounterMinus = styled.button`
    height: 0.75rem;
    padding: 0;
    border: none;

    display: flex;
    align-items: center;
    background-color: transparent;

    cursor: pointer;

    transition: opacity 0.2s ease-out;

    &:hover{
        opacity: 0.65;
    }
`

export const CounterPlus = styled.button`
    padding: 0;
    border: none;

    display: flex;
    background-color: transparent;

    cursor: pointer;

    transition: opacity 0.2s ease-out;

    &:hover{
       opacity: 0.65; 
    }
`

export const Counter = styled.p`
    font-weight: 700;
    font-size: 0.875rem;
`