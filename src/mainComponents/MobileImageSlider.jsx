import React from 'react';

import { MobImgSlider, 
         NextMobButton, 
         PrevMobButton } from '../buildingComponents/MobileSliderComponents';
import { PREVIOUS, NEXT } from '../productData/images';
import { useLibrary } from '../context/libraryContext';         

export default function MobileImageSlider({images}) {

    const len = images.length;
    const { indexState, indexDispatch} = useLibrary();
    const { indexCount } = indexState;

    function prevSlide(){
      indexDispatch({
        type: "DECREMENT",
        payload: len
      });
    }

    function nextSlide(){
      indexDispatch({
        type: "INCREMENT",
        payload: len
      });
    }    

    return (
        <MobImgSlider>
            {
                images.map( (entry,index) => (
                    <div    className={indexCount === index + 1 ? "mobile-slide active-anim" : "mobile-slide"} 
                            key={`item ${index + 1}`} >
                        <img  src={`../../${entry.path}`} />
                    </div>   
            ))}
            <PrevMobButton onClick={prevSlide}>
                <img src={PREVIOUS} alt="prev icon" />    
            </PrevMobButton>
            <NextMobButton onClick={nextSlide}>
                <img src={NEXT} alt="next icon" />    
            </NextMobButton> 
        </MobImgSlider>
    );
}
