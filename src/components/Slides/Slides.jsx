import React, { useReducer } from "react";

import './Slides.scss';

import Slide1 from "../Slide1/Slide1";
import Slide2 from "../Slide2/Slide2";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            state.slideNum = state.slideNum + 1;
            return {...state};
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
    
    let slide;
    switch (state.slideNum) {
        case 1:
            slide = <Slide1 />
            break;
        case 2:
            slide = <Slide2 />
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