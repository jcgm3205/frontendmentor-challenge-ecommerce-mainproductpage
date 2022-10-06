import React,{useState} from 'react';

import { DesktopImgSlidCont, 
         DesktopThumbCont } from '../buildingComponents/DesktopSliderComponents';
import { useLibrary } from '../context/libraryContext';         
import LightBoxGallery from './LightBoxGallery';
import ProductImageViewer from './ProductImageViewer';
import ThumbnailViewer from './ThumbnailViewer';

export default function DesktopImageSlider({images}) {

    //----------------------------------------------------------

    const [show, setShow] = useState(false)

    function handleOpen(){
        setShow(true);
    }

    function handleClose(){
        setShow(false)
    }
    
    //----------------------------------------------------------

    const { indexState, indexDispatch } = useLibrary();
    const { indexCount } = indexState;

    function moveBox(input){
        indexDispatch({
            type: "MOVEBOX",
            payload: input
        })
    }

    //----------------------------------------------------------

    if( images === undefined ){
        return null;
    }

    return (
        <>
            <DesktopImgSlidCont>
                <ProductImageViewer dataArray={images}
                                    count={indexCount}
                                    handleOpen={handleOpen} />
            </DesktopImgSlidCont>
            <DesktopThumbCont>
                <ThumbnailViewer    dataArray={images}
                                    count={indexCount}
                                    moveBox={moveBox}  />
            </DesktopThumbCont>
            <LightBoxGallery  show={show} onClose={handleClose} dataArray={images}  />
        </>
    )
}
