import styled from "styled-components";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const MainContainer = styled.main`
    display: grid;

    @media screen and (min-width: 900px) {
        width: 77%;
        height: 87.333333vh;
        margin: 0 auto;
        
        grid-template-columns: repeat(2, 1fr);
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const ImageSliderContainer = styled.div`
    @media screen and (min-width: 900px) {
  
        display: flex;
        flex-direction: column;
        justify-content: center;    
    }
`

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const DesktopFlexWrapper = styled.div`
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
    }
`