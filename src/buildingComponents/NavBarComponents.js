import styled from "styled-components";


export const NavBarContainer = styled.div`
    height: 100%;
  
    margin-right: auto;

    @media screen and (max-width: 900px) {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        z-index: 5;

        background-color: rgba(0, 0, 0, 0.9);

        opacity: ${({ open }) => open ? '1' : '0'};
        pointer-events: ${({ open }) => open ? 'visible' : 'none'};

        transition: opacity 0.5s ease-out;
    }
`

export const CustomNavBar = styled.nav`
    height: 100%;
    width: 24.75rem;

    position: relative;

    @media screen and (max-width: 900px) {
        height: 100vh;
        width: 15.75rem;
        background-color: var(--white);

        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;

        transform: ${ ({ open }) => open ? 'translate(0, 0)' : 'translate(-100%, 0)' };

        transition: transform 0.5s ease-in-out;
    }
`

export const NavBarCloseBtn = styled.button`
    height: 15px;
    width: 14px;
    padding: 0;
    border: none;
    margin-top: 1.625rem;
    margin-left: 1.625rem;
    margin-bottom: 4rem;

    background-color: var(--white);

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const NavBarLinkContainer = styled.ul`

    padding-left: 1.625rem;
    
    @media screen and (min-width: 900px) {
        height: 100%;
        padding: 0;

        display: flex;
        justify-content: space-between;
    }
`

export const NavBarItem = styled.li`

    margin-bottom: 1rem;

    @media screen and (min-width: 900px) {
        height: 100%;

        display: flex;
        align-items: center;

        position: relative;
    }
`

export const NavBarLink = styled.a`
    color: var(--dark-grayish-blue);

    transition: color 0.2s ease-out;

    &:hover{
        color: var(--very-dark-blue);
    }

    &::after{
        content: "";
        height: 3px;
        width: 0;

        background-color: var(--orange);

        position: absolute;
        left: 50%;
        bottom: 0;

        transition: 0.3s ease-out;
    }

    &:hover::after{
        left: 0;
        width: 100%;    
    }

    @media screen and (max-width: 900px) {
        color: var(--very-dark-blue);
        font-weight: 700;
    }
`

