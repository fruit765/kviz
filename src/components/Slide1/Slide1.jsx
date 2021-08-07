import './Slide1.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import imgFirst from '../../imgs/slide1__wrapper.png';
import { useContext } from 'react';
import { SlidesContext } from '../Slides/Slides';
// import {Helmet} from "react-helmet";

export default function Slide1() {
    const dispatch = useContext(SlidesContext);

    return (
        <div className="slide1">
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Karmy Queeeeze</title>   
                <meta property="og:url"   content="https://kviz.karmypet.ru/" />
                <meta property="og:type"  content="website" />
                <meta property="og:title" content="Karmy Queeeeze"></meta>                 
                <meta property="og:description" content="How much does culture influence creative thinking?" />
                <meta property="og:image" content="https://kviz.karmypet.ru/shareImg/result-slide__square-img-cat-bad.png"></meta>            
            </Helmet> */}
            <div className="slide1__back-background">
                <div className="slide1__front-background">
                    <div className="slide1__wrapper">
                        <div className="slide1__wrapper-imgs">
                            <div className="slide1__wrapper-img">
                                <img src={imgFirst} />
                            </div>
                        </div>
                        <div className="slide1__wrapper-title">
                            Считаешь, что ты хороший хозяин? А если проверим?
                        </div>
                        <div className="slide1__wrapper-text">
                            Пройди тест и узнай правильно ли ты растишь своего хвостика, улучши свой уровень владельца и получи чек-лист с советами от ветврача.
                        </div>
                        <div className="slide1__wrapper-btn">
                            <NextSlideBtn text="Пройти тест"
                                callback={() => {
                                    dispatch({ type: 'CHANGE_SLIDE' });
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
                                    window.open(`https://vk.com/share.php?url=${window.encodeURIComponent(window.location.href)}&title=${window.encodeURIComponent('Пройди тест и узнай правильно ли ты растишь своего хвостика, улучши свой уровень владельца и получи чек-лист с советами от ветврача.')}&image=${window.encodeURIComponent('https://kviz.karmypet.ru/shareImg/slide1__wrapper.png')}`, 'Опрос Квиз', 'width=640,height=480');
                                }}
                            ></a>
                            <a href="#" className="slide1__share-btn share-btn share-btn_fb"
                                onClick={e => {
                                    e.preventDefault();

                                    // window.open(`https://www.facebook.com/dialog/feed?app_id=2285265608383487&display=page&link=${window.encodeURIComponent('https://kviz.karmypet.ru')}&redirect_uri=https://kviz.karmypet.ru&picture=${window.encodeURIComponent('https://kviz.karmypet.ru/shareImg/result-slide__square-img-cat-bad.png')}`, 'Опрос Квиз', 'width=640,height=480')

                                    window.FB.ui(
                                        {
                                            method: 'share',
                                            href: 'https://kviz.karmypet.ru/',
                                            quote: "Пройди тест и узнай правильно ли ты растишь своего хвостика, улучши свой уровень владельца и получи чек-лист с советами от ветврача."
                                        },
                                        // callback
                                        function (response) {
                                            //   if (response && !response.error_message) {
                                            //     alert('Posting completed.');
                                            //   } else {
                                            //     alert('Error while posting.');
                                            //   }
                                        }
                                    );
                                    // window.open(`https://www.facebook.com/sharer.php?u=${window.encodeURIComponent("https://kviz.karmypet.ru")}`, '', 'width=640,height=480');
                                    // window.open(`https://www.facebook.com/dialog/share?href=https://kviz.karmypet.ru`)
                                }}
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}