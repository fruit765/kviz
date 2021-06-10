import './Slide2.scss';
import img1 from '../../imgs/slide2__wrapper-img1.svg';
import img2 from '../../imgs/slide2__wrapper-img2.svg';
import NextSlideBtn from '../NextSlideBtn/NextSlideBtn';
import { useContext, useState } from 'react';
import cl from 'classnames';
import { SlidesContext } from '../Slides/Slides';

export default function Slide2() {
    const [question, changeQuestion] = useState({
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
    });

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
                    changeQuestion(q);
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
                                dispatch({
                                    type: 'ADD_QUESTION',
                                    question: question,
                                });
                                dispatch({
                                    type: 'CHANGE_SLIDE',
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}