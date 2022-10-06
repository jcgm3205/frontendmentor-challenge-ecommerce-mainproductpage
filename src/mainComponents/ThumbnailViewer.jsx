import React from 'react';

export default function ThumbnailViewer({dataArray, count, moveBox}) {
    return (
        <>
        {
            dataArray.map( (entry,index) => ( 
                <button    className={ count === index + 1 ? "box active" : "box" }
                        onClick={ () => moveBox(index + 1) }
                        key={`item ${index + 1}`} >
                    <img src={`../../${entry.path}`} alt="Product thumbnail" />
                </button>    
        ))}        
        </>
    );
}