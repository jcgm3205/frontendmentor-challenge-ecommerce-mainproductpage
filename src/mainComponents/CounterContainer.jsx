import React, { useState } from 'react';

import { CounterWrapper, 
         Counter, 
         CounterMinus, 
         CounterPlus } from '../buildingComponents/CounterContainerComponents';
import { PLUS, MINUS } from '../productData/images';
import { useLibrary } from '../context/libraryContext';         

export default function CounterContainer() {

    const { counterState, counterDispatch } = useLibrary();
    const { counter } = counterState;

    function plusOne(){
        counterDispatch({
            type: "PLUS_ONE"
        });
    }

    function minusOne(){
        counterDispatch({
            type: "MINUS_ONE"
        });
    }

    return (
        <CounterWrapper>
            <CounterMinus onClick={minusOne}>
                <img src={MINUS} alt="minus icon" />
            </CounterMinus>
            <Counter>{counter}</Counter>
            <CounterPlus onClick={plusOne} >
                <img src={PLUS} alt="plus icon" />
            </CounterPlus>
        </CounterWrapper>
    );
}
