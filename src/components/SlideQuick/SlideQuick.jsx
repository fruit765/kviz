import './SlideQuick.scss';

import { useContext, useState } from "react";
import { SlidesContext } from "../Slides/Slides";
import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import c from 'classnames';
import catGood from '../../imgs/slide-quick__inform-img-cat-good.svg';
import catBad from '../../imgs/slide-quick__inform-img-cat-bad.svg';
import dogGood from '../../imgs/slide-quick__inform-img-dog-good.svg';
import dogBad from '../../imgs/slide-quick__inform-img-dog-bad.svg';

export default function SlideQuick(props) {
    const question = props.questions[props.qIndex][props.animal];
    const dispatch = useContext(SlidesContext);
    const [inform, changeInform] = useState(null);
    const [lightBtn, changeLightBtn] = useState(null);

    let img;
    if (props.animal === 'cat' && inform === 'good') img = catGood;
    if (props.animal === 'cat' && inform === 'bad') img = catBad;
    if (props.animal === 'dog' && inform === 'good') img = dogGood;
    if (props.animal === 'dog' && inform === 'bad') img = dogBad;

    let answers = [];
    question.answers.forEach((el, index) => {
        answers.push(
            <div className={c('slide-quick__answer', lightBtn && lightBtn.index === index && `slide-quick__answer_${lightBtn.status}`)} key={index}
                onClick={() => {
                    let q = {...question};
                    q.answers[index].isPick = true;
                    dispatch({type: 'ADD_QUESTION', question: q});
                    if (question.inform !== undefined) {
                        let inform;
                        if (q.answers[index].isRight) {
                            inform = 'good';
                        }
                        else {
                            inform = 'bad';
                        }
                        changeLightBtn({
                            status: inform,
                            index: index,
                        });
                        setTimeout(() => {
                            changeInform(inform);
                            changeLightBtn(null);
                        }, 500);
                    }
                    else {
                        dispatch({type: 'CHANGE_SLIDE'});
                        changeInform(null);
                    }
                }}
            >
                <span>{el.title}</span>
            </div>
        );
    });

    let orientation = props.orientation;
    if (props.animal === 'cat' && (props.qIndex === 8 || props.qIndex === 9 || props.qIndex === 10 || props.qIndex === 12)) {
        orientation = 'vertical';
    }
    if (props.animal === 'dog' && (props.qIndex === 11 || props.qIndex === 12)) {
        orientation = 'vertical';
    }

    return (
        <div className={c('slide-quick', `slide-quick_${orientation}`, inform && 'slide-quick_inform')}>
            <div className="slide-quick__front-background">
                {
                    !inform &&
                    <div className="slide-quick__wrapper">
                        <div className="slide-quick__title" dangerouslySetInnerHTML={{__html: question.title}}></div>
                        <div className="slide-quick__answers">
                            {answers}
                        </div>
                    </div>
                }
                {
                    inform &&
                    <div className="slide-quick__inform">
                        <div className="slide-quick__inform-img">
                            <img src={img} />
                        </div>
                        <div className="slide-quick__inform-title" dangerouslySetInnerHTML={{__html: question.inform[inform].title}}></div>
                        <div className="slide-quick__inform-text" dangerouslySetInnerHTML={{__html: question.inform[inform].text}}></div>
                        <div className="slide-quick__inform-btn">
                            <NextSlideBtn text="Далее"
                                callback={() => {
                                    dispatch({type: 'CHANGE_SLIDE'});
                                    changeInform(null);
                                }}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}