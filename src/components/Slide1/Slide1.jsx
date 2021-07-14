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
                            <a href="#" className="slide1__share-btn share-btn share-btn_vk"
                                onClick={e => {
                                    e.preventDefault();
                                    window.open(`https://vk.com/share.php?url=${window.encodeURIComponent(window.location.href)}&title=${window.encodeURIComponent('Опрос Квиз')}&image=${window.encodeURIComponent('https://i.pinimg.com/236x/ec/48/d1/ec48d196481d73fdd8be26872c6ec1e7--wallpaper-backgrounds-wallpapers.jpg')}`, 'Опрос Квиз', 'width=640,height=480');
                                }}
                            ></a>
                            <a href="#" className="slide1__share-btn share-btn share-btn_fb"
                                onClick={e => {
                                    e.preventDefault();
                                    window.open(`https://www.facebook.com/sharer.php?u=${window.encodeURIComponent(window.location.href)}`, 'Опрос Квиз', 'width=640,height=480');
                                }}
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}