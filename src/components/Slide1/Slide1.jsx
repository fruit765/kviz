import './Slide1.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import img1 from '../../imgs/slide1__wrapper-img1.svg';
import img2 from '../../imgs/slide1__wrapper-img2.svg';
import { useContext } from 'react';
import { SlidesContext } from '../Slides/Slides';

export default function Slide1() {
    const dispatch = useContext(SlidesContext);

    return (
        <div className="slide1">
            <div className="slide1__back-background">
                <div className="slide1__front-background">
                    <div className="slide1__wrapper">
                        <div className="slide1__wrapper-imgs">
                            <div className="slide1__wrapper-img">
                            <img src={img1} />
                            </div>
                            <div className="slide1__wrapper-img">
                                <img src={img2} />
                            </div>
                        </div>
                        <div className="slide1__wrapper-title">
                            Проверь свой уровень владеленства!
                        </div>
                        <div className="slide1__wrapper-text">
                            Пройди тест и узнай правильно ли ты растишь своего хвостика, улучши свой уровень владельца и получи чек-лист с советами от ветврача.
                        </div>
                        <div className="slide1__wrapper-btn">
                            <NextSlideBtn text="Пройти тест"
                                callback={() => {
                                    dispatch({type: 'CHANGE_SLIDE'});
                                }}
                            />
                        </div>
                    </div>
                    <div className="slide1__share">
                        <div className="slide1__share-text">
                            Поделись тестом с друзьями:
                        </div>
                        <div className="slide1__share-btns">
                            <a href="#" className="slide1__share-btn share-btn share-btn_inst"></a>
                            <a href="#" className="slide1__share-btn share-btn share-btn_vk"></a>
                            <a href="#" className="slide1__share-btn share-btn share-btn_fb"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}