import React, { useReducer, useEffect } from "react";

import './Slides.scss';

import Slide1 from "../Slide1/Slide1";
import Slide2 from "../Slide2/Slide2";
import Slide3 from "../Slide3/Slide3";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            // let newState = {...state};
            // newState.slideNum = newState.slideNum + 1;
            // console.log(newState);
            // return newState;

            state.slideNum = state.slideNum + 1;
            console.log({...state});
            return {...state};
        case 'ADD_QUESTION':
            state.questions.push(action.question);
            return state;
        default:
            return state;
    }
}

export const SlidesContext = React.createContext();

export default function Slides() {
    
    const initialState = {
        slideNum: 1,
        questions: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log("useEffect slideNum >>>", state.slideNum);
    });
    
    let slide;
    switch (state.slideNum) {
        case 1:
            slide = <Slide1 />
            break;
        case 2:
            slide = <Slide2 />
            break;
        case 3:
            slide = <Slide3 />
            break;
        default:
            slide = null;
            break;
    }

    return (
        <div className="slides">
            <SlidesContext.Provider value={dispatch} >
                {slide}
            </SlidesContext.Provider>
        </div>
    );
}