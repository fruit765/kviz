import React, { useReducer, useEffect } from "react";

import './Slides.scss';

import Slide1 from "../Slide1/Slide1";
import Slide2 from "../Slide2/Slide2";
import Slide3 from "../Slide3/Slide3";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            state.slideNum = state.slideNum + 1;
            return {...state};
        case 'CHANGE_QUESTION':
            if (state.animal !== null) {
                state.questions[action.index][state.animal] = action.question;
            }
            else {
                state.questions[action.index] = action.question;
            }
            return {...state};
        case 'CHECK_ANIMAL':
            state.animal = action.animal;
            return state;
        case 'ADD_QUESTION':
            state.answerQuestions.push(action.question);
            return state;
        default:
            return state;
    }
}

export const SlidesContext = React.createContext();

export default function Slides() {
    
    const initialState = {
        slideNum: 1,
        questions: [
            {
                title: 'Какой у вас питомец?',
                type: 'inform',
                answers: [
                    {
                        title: 'Кошка',
                        isPick: false,
                    },
                    {
                        title: 'Собака',
                        isPick: false,
                    },
                ],
            },
            {
                cat: {
                    title: 'Какая порода у вашей кошки?',
                    type: 'inform',
                    answers: [
                        {
                            title: 'Британская',
                            isPick: false,
                        },
                        {
                            title: 'Шотландская',
                            isPick: false,
                        },
                        {
                            title: 'Тайская',
                            isPick: false,
                        },
                        {
                            title: 'Абиссинская',
                            isPick: false,
                        },
                        {
                            title: 'Ориентальная',
                            isPick: false,
                        },
                        {
                            title: 'Сфинкс',
                            isPick: false,
                        },
                        {
                            title: 'Сиамская',
                            isPick: false,
                        },
                        {
                            title: 'Русская голубая',
                            isPick: false,
                        },
                        {
                            title: 'Бобтейл',
                            isPick: false,
                        },
                        {
                            title: 'Американкая',
                            isPick: false,
                        },
                        {
                            title: 'Йоркская',
                            isPick: false,
                        },
                        {
                            title: 'Персидская',
                            isPick: false,
                        },
                        {
                            title: 'Мейн-кун',
                            isPick: false,
                        },
                        {
                            title: 'Сибирская',
                            isPick: false,
                        },
                        {
                            title: 'Другая порода',
                            isPick: false,
                        },
                        {
                            title: 'Без породы',
                            isPick: false,
                        },
                    ],
                },
                dog: {
                    title: 'Какая порода у вашей собаки?',
                    type: 'inform',
                    answers: [
                        {
                            title: 'Джек-рассел-терьер',
                            isPick: false,
                        },
                        {
                            title: 'Немецкая овчарка',
                            isPick: false,
                        },
                        {
                            title: 'Хаски',
                            isPick: false,
                        },
                        {
                            title: 'Такса',
                            isPick: false,
                        },
                        {
                            title: 'Бульдог',
                            isPick: false,
                        },
                        {
                            title: 'Чихуахуа',
                            isPick: false,
                        },
                        {
                            title: 'Мопс',
                            isPick: false,
                        },
                        {
                            title: 'Далматин',
                            isPick: false,
                        },
                        {
                            title: 'Йоркширский терьер',
                            isPick: false,
                        },
                        {
                            title: 'Сенбернар',
                            isPick: false,
                        },
                        {
                            title: 'Колли',
                            isPick: false,
                        },
                        {
                            title: 'Чау-чау',
                            isPick: false,
                        },
                        {
                            title: 'Болонка',
                            isPick: false,
                        },
                        {
                            title: 'Борзая',
                            isPick: false,
                        },
                        {
                            title: 'Кокер-спаниель',
                            isPick: false,
                        },
                        {
                            title: 'Шпиц',
                            isPick: false,
                        },
                        {
                            title: 'Другая порода',
                            isPick: false,
                        },
                        {
                            title: 'Без породы',
                            isPick: false,
                        },
                    ],
                },
            },
        ],
        answerQuestions: [],
        animal: null,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    
    let slide;
    switch (state.slideNum) {
        case 1:
            slide = <Slide1 />
            break;
        case 2:
            slide = <Slide2 questions={state.questions} qIndex={state.slideNum - 2} />
            break;
        case 3:
            slide = <Slide3 questions={state.questions} qIndex={state.slideNum - 2} animal={state.animal} />
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