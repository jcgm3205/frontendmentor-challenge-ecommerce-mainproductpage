import styled from "styled-components";

export const LightBoxContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: var(--black-75perc-op);
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
`

export const LightBoxElementsContainer = styled.div`
    position: relative;

    margin-bottom: 2.5rem;
`

export const ThumbCont = styled.div`
    height: 10vh;
    width: 50vh;

    display: flex;
    justify-content: space-between;
`

export const LightBoxCloseBtn = styled.button`
    padding: 0;
    border: none;
    height: 22px;
    aspect-ratio: 1/1;

    background-color: transparent;

    position: relative;
    left: 100%;
    transform: translateX(-100%);

    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }

    &:hover > img{
        /*https://htmlcolors.com/hsl-to-hex*/
        /*https://isotropic.co/tool/hex-color-to-css-filter/*/
        filter: invert(58%) sepia(98%) saturate(2131%) hue-rotate(345deg)
        brightness(99%) contrast(105%);
    }
`

export const LightBox = styled.article`
    width: 61.111111vh;
    aspect-ratio: 1/1;

    border-radius: 12px;

    position: relative;
    overflow: hidden;    
`

export const PrevLigal = styled.div`
    height: 3.5rem;
    width: 3.5rem;

    border-radius: 50%;

    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;

    cursor: pointer;

    transform: translate3d(-50%, -50%, 0);

    &:hover > img{
        /*https://htmlcolors.com/hsl-to-hex*/
        /*https://isotropic.co/tool/hex-color-to-css-filter/*/
        filter: invert(58%) sepia(98%) saturate(2131%) hue-rotate(345deg)
        brightness(99%) contrast(105%);        
    }
`

export const NextLigal = styled.div`
    height: 3.5rem;
    width: 3.5rem;

    border-radius: 50%;

    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;

    cursor: pointer;
    right: 0;
    transform: translate3d(50%, -50%, 0);

    &:hover > img{
        /*https://htmlcolors.com/hsl-to-hex*/
        /*https://isotropic.co/tool/hex-color-to-css-filter/*/
        filter: invert(58%) sepia(98%) saturate(2131%) hue-rotate(345deg)
        brightness(99%) contrast(105%);        
    }    
`