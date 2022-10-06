import React, {useEffect} from 'react';

import { useLibrary } from './context/libraryContext';
import { DesktopFlexWrapper, MainContainer, ImageSliderContainer } from './buildingComponents/AppComponents';
import { DesktopStyleContainer, 
         Discount, 
         FinalPrice, 
         OriginalPrice, 
         PricesContainer, 
         ProdSectContainer, 
         ProdSectDescription, 
         ProdSectSubtitle, 
         ProdSectTitle } from './buildingComponents/ProdSectComponents';
import CounterContainer from './mainComponents/CounterContainer';
import AddToCartButton from './mainComponents/AddToCartButton';
import Header from './mainComponents/Header';
import MobileImageSlider from './mainComponents/MobileImageSlider';
import DesktopImageSlider from './mainComponents/DesktopImageSlider';

export default function App() {
  
    const { isMobileView, dataState, dataDispatch } = useLibrary();
    const { data } = dataState;

    useEffect( () => {
        dataDispatch({
            type: "FIND_DATA",
            payload: "000001"
        });
    }, []);

    if(data === null){
        return null;
    }
    
    return (
        <>
            <Header />
            <MainContainer>
                <ImageSliderContainer>
                    {isMobileView && <MobileImageSlider images={data.images} />} 
                    {!isMobileView && <DesktopImageSlider images={data.images} />} 
                </ImageSliderContainer>
                <ProdSectContainer>
                    <DesktopStyleContainer>
                        <ProdSectSubtitle>Sneaker Company</ProdSectSubtitle>  
                        <ProdSectTitle>{data.prodName}</ProdSectTitle>
                        <ProdSectDescription>{data.prodDescription}</ProdSectDescription>
                        <PricesContainer>
                            <FinalPrice>${data.prodFinalp}</FinalPrice>
                            <Discount>{data.prodDiscount}%</Discount>
                            <OriginalPrice>${data.prodOriginalp}</OriginalPrice>
                        </PricesContainer>
                        <DesktopFlexWrapper>
                            <CounterContainer />
                            <AddToCartButton data={data}/>  
                        </DesktopFlexWrapper>
                    </DesktopStyleContainer>  
                </ProdSectContainer>
            </MainContainer>

        </>
    );
}
