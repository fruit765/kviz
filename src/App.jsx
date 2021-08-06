import Header from "./components/Header/Header";
import Slides from "./components/Slides/Slides";

import imgFirst from './imgs/slide1__wrapper.png';
import img3 from './imgs/slide2__wrapper-img1.png';
import img4 from './imgs/slide2__wrapper-img2.png';
import img5 from './imgs/slide-quick__inform-img-cat-good.png';
import img6 from './imgs/slide-quick__inform-img-cat-bad.png';
import img7 from './imgs/slide-quick__inform-img-dog-good.png';
import img8 from './imgs/slide-quick__inform-img-dog-bad.png';
import img9 from './imgs/result-slide__square-img-cat-bad.png';
import img10 from './imgs/result-slide__square-img-cat-middle.png';
import img11 from './imgs/result-slide__square-img-cat-good.png';
import img12 from './imgs/result-slide__square-img-dog-bad.png';
import img13 from './imgs/result-slide__square-img-dog-middle.png';
import img14 from './imgs/result-slide__square-img-dog-good.png';

function App() {
  return (
    <div className="App">
      <div className="preload-imgs">
        <img src={imgFirst} />
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