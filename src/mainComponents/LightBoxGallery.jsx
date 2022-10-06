import React,{useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import { LightBox, 
         LightBoxCloseBtn, 
         LightBoxContainer, 
         LightBoxElementsContainer, 
         NextLigal, 
         PrevLigal, 
         ThumbCont } from '../buildingComponents/LightBoxGalleryComponents';
import { CLOSE, PREVIOUS, NEXT } from '../productData/images';
import ProductImageViewer from './ProductImageViewer';
import ThumbnailViewer from './ThumbnailViewer';

export default function LightBoxGallery({show, onClose, dataArray}) {

    const [indexImg, setIndexImg] = useState(1);

    function prevSlide(){
        setIndexImg( indexImg - 1 );
        if( indexImg === 1 ){
            setIndexImg( dataArray.length )
        }
    }

    function nextSlide(){
        setIndexImg( indexImg + 1 );
        if( indexImg === dataArray.length ){
            setIndexImg( 1 )
        }
    }

    function moveBox(input){
        setIndexImg(input)
    }    

    return (
        <CSSTransition  in={show}
                        unmountOnExit
                        timeout={{ enter:0, exit: 300 }} >
            <LightBoxContainer className='lightbox-container'>
                <LightBoxElementsContainer onClick={e => e.stopPropagation()}>
                    <LightBoxCloseBtn onClick={onClose}>
                        <img  src={CLOSE} alt="close icon" />
                    </LightBoxCloseBtn>
                    <LightBox>
                        <ProductImageViewer dataArray={dataArray}
                                            count={indexImg} />
                    </LightBox>
                    <PrevLigal onClick={prevSlide}>
                        <img src={PREVIOUS} alt="prev icon" />
                    </PrevLigal>
                    <NextLigal onClick={nextSlide} >
                        <img src={NEXT} alt="next icon" />
                    </NextLigal>
                </LightBoxElementsContainer>
                <ThumbCont onClick={e => e.stopPropagation()} >
                    <ThumbnailViewer    dataArray={dataArray}
                                        count={indexImg}
                                        moveBox={moveBox}  />
                </ThumbCont>
            </LightBoxContainer>
        </CSSTransition>
    );
}
