import './Slide2.scss';
import img1 from '../../imgs/slide2__wrapper-img1.png';
import img2 from '../../imgs/slide2__wrapper-img2.png';
import NextSlideBtn from '../NextSlideBtn/NextSlideBtn';
import { useContext, useState } from 'react';
import cl from 'classnames';
import { SlidesContext } from '../Slides/Slides';
import SlideNumeration from '../SlideNumeration/SlideNumeration';
import SlideNumerationText from '../SlideNumeration/SlideNumerationText';

export default function Slide2(props) {
    const question = props.questions[props.qIndex];
    const dispatch = useContext(SlidesContext);

    let answers = [];
    question.answers.forEach((el, index) => {
        answers.push(
            <button className={cl('slide2__wrapper-answer', el.isPick && 'slide2__wrapper-answer_is-pick')} key={index}
                onClick={() => {
                    let q = {...question};
                    for (let answer of q.answers) {
                        answer.isPick = false;
                    }
                    q.answers[index].isPick = true;
                    dispatch({type: 'CHANGE_QUESTION', question: q, index:props.qIndex});
                }}
            >
                {el.title}
            </button>
        );
    });

    return (
        <div className="slide2">
            <div className="slide2__front-background">
                <div className="slide2__wrapper">
                    <div className="slide2__wrapper-title">
                        Вопрос 1:<br />
                        {question.title}
                    </div>
                    <div className="slide2__wrapper-imgs">
                        <div className="slide2__wrapper-img">
                            <img src={img1} />
                        </div>
                        <div className="slide2__wrapper-img">
                            <img src={img2} />
                        </div>
                        <div className="slide2__wrapper-answers">
                            {answers}
                        </div>
                    </div>
                    <div className="slide2__wrapper-btn">
                        <NextSlideBtn text="Далее"
                            callback={() => {
                                let isPick = false;
                                let index = 0;
                                let animal;
                                for (let answer of question.answers) {
                                    if (answer.isPick) {
                                        isPick = true;
                                        if (index === 0) {
                                            animal = 'cat';
                                        }
                                        else {
                                            animal = 'dog';
                                        }
                                        break;
                                    }
                                    index++;
                                }
                                if (isPick) {
                                    dispatch({type: 'CHECK_ANIMAL', animal});
                                    dispatch({type: 'ADD_QUESTION', question});
                                    dispatch({type: 'CHANGE_SLIDE'});
                                }
                                else {
                                    alert('Выберите питомца!');
                                }
                            }}
                        />
                    </div>
                    <SlideNumeration count="14" num={props.qIndex + 1}/>
                    <SlideNumerationText count="14" num={props.qIndex + 1} />
                </div>
            </div>
        </div>
    );
}