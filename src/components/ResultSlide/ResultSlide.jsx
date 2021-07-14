import './ResultSlide.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import resultCatBad from '../../imgs/result-slide__square-img-cat-bad.svg';
import resultCatMiddle from '../../imgs/result-slide__square-img-cat-middle.svg';
import resultCatGood from '../../imgs/result-slide__square-img-cat-good.svg';
import resultDogBad from '../../imgs/result-slide__square-img-dog-bad.svg';
import resultDogMiddle from '../../imgs/result-slide__square-img-dog-middle.svg';
import resultDogGood from '../../imgs/result-slide__square-img-dog-good.svg';

export default function ResultSlide(props) {
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
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_inst share-btn share-btn_inst"></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_vk share-btn share-btn_vk"></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_fb share-btn share-btn_fb">
                                    <div className="result-slide__share-arrow"></div>
                                </a>
                            </div>
                        </div>
                        <div className="result-slide__wrapper-send">
                            <div className="result-slide__wrapper-send-title">
                                Не забудьте свою памятку!
                            </div>
                            <div className="result-slide__wrapper-send-btn">
                                <NextSlideBtn text="Получить памятку"
                                    callback={() => {
                                        
                                    }}
                                />
                            </div>
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