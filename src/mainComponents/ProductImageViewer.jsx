import React from 'react';

export default function ProductImageViewer(props) {
    return (
        <>
        {
            props.dataArray.map( (entry,index) => (
                <div    className={props.count === index + 1 ? "desktop-slide active-anim" : "desktop-slide"} 
                        key={`item ${index + 1}`}
                        onClick={props?.handleOpen} >
                    <img  src={`../../${entry.path}`} alt="product image"/>
                </div>   
        ))}        
        </>
    );
}