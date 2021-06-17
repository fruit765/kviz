import './Slide3.scss';

import { useContext } from "react";
import NextSlideBtn from '../NextSlideBtn/NextSlideBtn';
import { SlidesContext } from '../Slides/Slides';
import c from 'classnames';

function changeQuestion(q, ai, qi, d) {
    q = {...q};
    for (let answer of q.answers) {
        answer.isPick = false;
    }
    q.answers[ai].isPick = true;
    d({type: 'CHANGE_QUESTION', question: q, index: qi});
}

export default function SlideCat3(props) {
    const question = props.questions[props.qIndex][props.animal];
    const dispatch = useContext(SlidesContext);

    let answersLeft = [];
    let answersRight = [];
    question.answers.forEach((el, index) => {
        if (index < question.answers.length / 2) {
            answersLeft.push(
                <div className="slide3__answer" key={index}>
                    <input type="radio" name="answer" id={index} checked={el.isPick} onChange={() => {}} />
                    <label htmlFor={index}
                        onClick={() => {
                            changeQuestion(question, index, props.qIndex, dispatch);
                        }}
                    >
                        <span className="slide3__answer-input"></span>
                        {el.title}
                    </label>
                </div>
            );
        }
        else {
            answersRight.push(
                <div className="slide3__answer" key={index}>
                    <input type="radio" name="answer" id={index} checked={el.isPick} onChange={() => {}} />
                    <label htmlFor={index}
                        onClick={() => {
                            changeQuestion(question, index, props.qIndex, dispatch);
                        }}
                    >
                        <span className="slide3__answer-input"></span>
                        {el.title}
                    </label>
                </div>
            );
        }
    });

    let isPick = false;
    for (let answer of question.answers) {
        if (answer.isPick) {
            isPick = true;
            break;
        }
    }

    return (
        <div className={c('slide3', `slide3_${props.animal}`)}>
            <div className="slide3__front-background">
                <div className="slide3__wrapper">
                    <div className="slide3__wrapper-title">
                        Вопрос 2:<br />
                        {question.title}
                    </div>
                    <div className="slide3__answers">
                        <div className="slide3__answers-left">
                            {answersLeft}
                        </div>
                        <div className="slide3__answers-right">
                            {answersRight}
                        </div>
                    </div>
                    {
                        isPick &&
                        <div className="slide3__btn">
                            <NextSlideBtn text="Далее"
                                callback={() => {
                                    dispatch({type: 'ADD_QUESTION', question});
                                    dispatch({type: 'CHANGE_SLIDE'});
                                }}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}