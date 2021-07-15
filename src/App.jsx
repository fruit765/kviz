import Header from "./components/Header/Header";
import Slides from "./components/Slides/Slides";

import img1 from './imgs/slide1__wrapper-img1.svg';
import img2 from './imgs/slide1__wrapper-img2.svg';
import img3 from './imgs/slide2__wrapper-img1.svg';
import img4 from './imgs/slide2__wrapper-img2.svg';
import img5 from './imgs/slide-quick__inform-img-cat-good.svg';
import img6 from './imgs/slide-quick__inform-img-cat-bad.svg';
import img7 from './imgs/slide-quick__inform-img-dog-good.svg';
import img8 from './imgs/slide-quick__inform-img-dog-bad.svg';
import img9 from './imgs/result-slide__square-img-cat-bad.svg';
import img10 from './imgs/result-slide__square-img-cat-middle.svg';
import img11 from './imgs/result-slide__square-img-cat-good.svg';
import img12 from './imgs/result-slide__square-img-dog-bad.svg';
import img13 from './imgs/result-slide__square-img-dog-middle.svg';
import img14 from './imgs/result-slide__square-img-dog-good.svg';

function App() {
  return (
    <div className="App">
      <div className="preload-imgs">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
        <img src={img10} />
        <img src={img11} />
        <img src={img12} />
        <img src={img13} />
        <img src={img14} />
      </div>
      <Header />
      <Slides />
    </div>
  );
}

export default App;