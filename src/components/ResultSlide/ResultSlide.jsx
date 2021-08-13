import './ResultSlide.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import resultCatBad from '../../imgs/result-slide__square-img-cat-bad.png';
import resultCatMiddle from '../../imgs/result-slide__square-img-cat-middle.png';
import resultCatGood from '../../imgs/result-slide__square-img-cat-good.png';
import resultDogBad from '../../imgs/result-slide__square-img-dog-bad.png';
import resultDogMiddle from '../../imgs/result-slide__square-img-dog-middle.png';
import resultDogGood from '../../imgs/result-slide__square-img-dog-good.png';

import React, { useState, useEffect } from 'react';
// import {Helmet} from "react-helmet";
const axios = require('axios').default;

export default function ResultSlide(props) {

    const [popup, setPopup] = useState(0);
    const [email, setEmail] = useState(undefined);

    // useEffect(() => {
    //    console.log(window.location.href)
    // }, [])

    const sendResults = () => {
        if (!email || !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Неверный формат Email")
            return
        }
        console.log(
            props.animal,
            email,
            props.result
        )
        axios.post('https://kviz.karmypet.ru/api/result', {
            animal: props.animal,
            email: email,
            result: props.result
        })
        setEmail(undefined)
        setPopup(2)
    }

    const getImgHref = () => {
        if (props.animal === 'cat') {
            if (props.calculateResult === 'bad')
                return 'result-slide__square-img-cat-bad.png';
            if (props.calculateResult === 'middle')
                return 'result-slide__square-img-cat-middle.png';
            if (props.calculateResult === 'good')
                return 'result-slide__square-img-cat-good.png';
        }
        if (props.animal === 'dog') {
            if (props.calculateResult === 'bad')
                return 'result-slide__square-img-dog-bad.png';
            if (props.calculateResult === 'middle')
                return 'result-slide__square-img-dog-middle.png';
            if (props.calculateResult === 'good')
                return 'result-slide__square-img-dog-good.png';
        }
    }

    let img;
    if (props.animal === 'cat') {
        if (props.calculateResult === 'bad') img = resultCatBad;
        if (props.calculateResult === 'middle') img = resultCatMiddle;
        if (props.calculateResult === 'good') img = resultCatGood;
    }
    if (props.animal === 'dog') {
        if (props.calculateResult === 'bad') img = resultDogBad;
        if (props.calculateResult === 'middle') img = resultDogMiddle;
        if (props.calculateResult === 'good') img = resultDogGood;
    }

    return (
        <div className="result-slide">
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Karmy Queeeeze</title>   
                <meta property="og:title" content="Karmy Queeeeze"></meta> 
                <meta property="og:type" content="article" />
                <meta property="og:description" content="How much does culture influence creative thinking?" />
                <meta property="og:image" content="https://kviz.karmypet.ru/shareImg/result-slide__square-img-cat-bad.png"></meta>            
            </Helmet>                       */}
            <div className="result-slide__back-background">
                <div className="result-slide__front-background">
                    <div className="result-slide__wrapper">
                        <div className="result-slide__wrapper-left">
                            <div className="result-slide__square">
                                <div className="result-slide__square-img">
                                    <img src={img} />
                                </div>
                                <div className="result-slide__square-title">
                                    {props.result[props.animal][props.calculateResult].title}
                                </div>
                                <div className="result-slide__square-text">
                                    {props.result[props.animal][props.calculateResult].text}
                                </div>
                                <div className="result-slide__square-arrow"></div>
                            </div>
                            <div className="result-slide__share">
                                {/* <a href="#" className="result-slide__share-btn result-slide__share-btn_inst share-btn share-btn_inst"></a> */}
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_vk share-btn share-btn_vk"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.open(`https://vk.com/share.php?url=${window.encodeURIComponent(window.location.href)}&title=${props.result[props.animal][props.calculateResult].title} ${props.result[props.animal][props.calculateResult].text}&image=${window.encodeURIComponent(`https://kviz.karmypet.ru/shareImg/${getImgHref()}`)}`, 'Опрос Квиз', 'width=640,height=480');
                                    }}
                                ></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_fb share-btn share-btn_fb"
                                    onClick={e => {
                                        e.preventDefault();

                                        window.FB.ui(
                                            {
                                                method: 'share',
                                                href: 'https://kviz.karmypet.ru/',
                                                quote: `${props.result[props.animal][props.calculateResult].title} ${props.result[props.animal][props.calculateResult].text}`
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

                                        // window.open(`https://www.facebook.com/sharer.php?u=${window.encodeURIComponent("https://kviz.karmypet.ru")}`, `sdfsdfsdf`, 'width=640,height=480');
                                    }}
                                >
                                    <div className="result-slide__share-arrow"></div>
                                </a>
                            </div>
                        </div>
                        <div className="result-slide__wrapper-send">
                            {popup === 1 &&
                                <div className="result-slide-overlay-container">
                                    <div className="result-slide-overlay-container__close-btn-container padding-omni-10">
                                        <div
                                            className="result-slide-overlay-container__close-btn-container__img close-btn"
                                            onClick={() => {
                                                setPopup(0)
                                            }}>
                                        </div>
                                    </div>
                                    <div className="result-slide__wrapper-send-title padding-hor-20">
                                        Оставляйте свою почту для получения памятки!
                                </div>
                                    <div className="result-slide-overlay-container__content padding-omni-20">
                                        <input
                                            className="result-slide-overlay-container__input input-btn-hor-space input-btn-bottom-space"
                                            type="text"
                                            placeholder="Ваша почта"
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                        <NextSlideBtn text="Отправить"
                                            callback={() => {
                                                sendResults()
                                            }}
                                        />
                                    </div>
                                </div>

                            }
                            {popup === 2 &&
                                <div className="result-slide__wrapper-send-title">
                                        Отправлено
                                </div>
                            }
                            {
                                !popup && <>
                                    <div className="result-slide__wrapper-send-title">
                                        Не забудьте свою памятку!
                            </div>
                                    <div className="result-slide__wrapper-send-btn">
                                        <NextSlideBtn text="Получить памятку"
                                            callback={() => { setPopup(1) }}
                                        />
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="result-slide__site">
                <div className="result-slide__site-wrapper section">
                    <span>
                        Выбирайте подходящий корм и радуйте любимца полезными вкусностями <a href="https://karmypet.ru/" target="_blank">на сайте Karmy</a>
                    </span>
                </div>
            </div>
        </div>
    );
}