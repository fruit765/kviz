import { useReducer } from "react";

import './Slides.scss';

import Slide1 from "../Slide1/Slide1";
import Slide2 from "../Slide2/Slide2";

function reducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

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
            {slide}
        </div>
    );
}