import './ResultSlide.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import resultCatBad from '../../imgs/result-slide__square-img-cat-bad.svg';
import resultCatMiddle from '../../imgs/result-slide__square-img-cat-middle.svg';
import resultCatGood from '../../imgs/result-slide__square-img-cat-good.svg';
import resultDogBad from '../../imgs/result-slide__square-img-dog-bad.svg';
import resultDogMiddle from '../../imgs/result-slide__square-img-dog-middle.svg';
import resultDogGood from '../../imgs/result-slide__square-img-dog-good.svg';

export default function ResultSlide() {
    return (
        <div className="result-slide">
            <div className="result-slide__back-background">
                <div className="result-slide__front-background">
                    <div className="result-slide__wrapper">
                        <div className="result-slide__wrapper-left">
                            <div className="result-slide__square">
                                <div className="result-slide__square-img">
                                    <img src={resultCatBad} />
                                </div>
                                <div className="result-slide__square-title">
                                    Воу, да вы профи!
                                </div>
                                <div className="result-slide__square-text">
                                    Ваш котик в надежных руках, мы счастливы за него. У него есть все шансы стать долгожителем! Проявите экспертность, поделитесь своим чек-листом с другом, у которого уровень ухода за питомцем далек от вашего!
                                </div>
                            </div>
                            <div className="result-slide__share">
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_inst share-btn share-btn_inst"></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_vk share-btn share-btn_vk"></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_fb share-btn share-btn_fb"></a>
                            </div>
                        </div>
                        <div className="result-slide__wrapper-send">
                            <div className="result-slide__wrapper-send-title">
                                Не забудьте свою памятку!
                            </div>
                            <div className="result-slide__wrapper-send-btn">
                                <NextSlideBtn text="Получить памятку" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}