import styled from "styled-components";

export const MobImgSlider = styled.article`
    height: 300px;

    position: relative;
    overflow: hidden;
`

export const PrevMobButton = styled.div`
    height: 2.625rem;
    width: 2.625rem;

    border-radius: 50%;

    background-color: var(--white);

    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;    
`

export const NextMobButton = styled.div`
    height: 2.625rem;
    width: 2.625rem;

    border-radius: 50%;

    background-color: var(--white);

    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;    
` 