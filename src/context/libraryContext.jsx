import React, { useContext, createContext, useState, useEffect, useReducer } from "react";
import { productData } from "../productData/productData";

function miniLibrary(){

    //-------------------------------------------------------------------------

    const [ isMobileView, setIsMobileView ] = useState(null);

    const MOBILE_BREAKING_POINT = 900;
        
    function getScreenSize() {
        window.innerWidth < MOBILE_BREAKING_POINT ? setIsMobileView(true)
                                                  : setIsMobileView(false)
    };

    // Function related with the "useEffect" hook to get the
    // value of "isMobileView" dynamically:
    useEffect(() => {
        getScreenSize();
        window.addEventListener('resize', getScreenSize);
        return () => window.removeEventListener('resize', getScreenSize);
    },[]);

    //-------------------------------------------------------------------------

    const initialIndexState = {
        indexCount: 1
    };

    const indexReducer = (state, {type, payload}) => {
        switch (type){
            case "INCREMENT":
                if( state.indexCount === payload ){ 
                    return { indexCount: 1 }  
                }
                return { indexCount: state.indexCount + 1 };
            case "DECREMENT":
                if( state.indexCount === 1 ){ 
                    return { indexCount: payload }  
                }                
                return { indexCount: state.indexCount - 1 };
            case "MOVEBOX":
                return { indexCount: payload }        
            default:
                throw new Error(`Unknown action type: ${action.type}`);    
        }
    }

    const [indexState, indexDispatch] = useReducer(indexReducer, initialIndexState);
    
    //-------------------------------------------------------------------------

    const [isOpen, setIsOpen] = useState(false);

    function modifyOpenState(){
        setIsOpen(!isOpen);
    }

    //-------------------------------------------------------------------------

    const initialCounterState = {
        counter: 0
    };

    const counterReducer = (state, {type}) => {
        switch (type){
            case "PLUS_ONE":
                if( state.counter === 99 ){ 
                    return { counter: 0 }  
                }
                return { counter: state.counter + 1 };
            case "MINUS_ONE":
                if( state.counter === 0 ){ 
                    return initialCounterState;  
                }                
                return { counter: state.counter - 1 };
            case "RESET":
                return initialCounterState;
            default:
                throw new Error(`Unknown action type: ${action.type}`);    
        }
    }

    const [counterState, counterDispatch] = useReducer(counterReducer, initialCounterState);

    //-------------------------------------------------------------------------

    const initialDataState = {
        data: null
    }

    const dataReducer = (state, {type, payload}) => {
        let res;
        switch (type) {
            case "FIND_DATA":
                res = productData.find(product => product.id === payload);
                return { data: res };      
        }
    }

    const [dataState, dataDispatch] = useReducer( dataReducer, initialDataState );

    //-------------------------------------------------------------------------

    const initialCartState = {
        cart: [],
        totalProductsCount: 0
    }

    const cartReducer = (state, {type, payload}) => {
        let array;
        let initialVal = 0;
        let prodCount;
        switch (type) {
            case "ADD_TO_CART":
                array = state.cart;
                array.push(payload);
                return { ...state, cart: array };
            case "DELETE_FROM_CART":
                array = state.cart;
                array.splice( payload, 1 );
                return { ...state, cart: array };
            case "COMPUTE_COUNT":
                array = state.cart;
                if( array.length === 0 ){
                    return { ...state, totalProductsCount: 0 };
                }
                if(array.length !== 0){
                    prodCount = array.reduce(
                        (previousValue, currentValue) => previousValue + currentValue?.quantity,
                        initialVal
                    );
                    return { ...state, totalProductsCount: prodCount };
                }                
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    }

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    //-------------------------------------------------------------------------

    return {    isMobileView, 
                indexState, 
                indexDispatch, 
                isOpen, 
                modifyOpenState,
                counterState,
                counterDispatch,
                dataState,
                dataDispatch,
                cartState,
                cartDispatch   }
}

//--------------------------------------------------------------

const libraryContext = createContext();

export function useLibrary(){
    return useContext(libraryContext);
}

//--------------------------------------------------------------

export function LibProvider({children}){
    const lib = miniLibrary();

    return <libraryContext.Provider value={lib}>{children}</libraryContext.Provider>
} 