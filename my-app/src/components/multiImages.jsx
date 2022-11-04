import { useState } from 'react'
import arrowRight from "../assets/images/arrow_right.png"
import arrowLeft from "../assets/images/arrow_left.png"

import "../utils/css/style.css";


function ImagesSlide(move) {
    const [current, setCurrent] = useState(0);
    const length = move.pictures.length;
    const changePictures = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const before = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div class='slideshow'>
          {length > 1 && (<div onClick={before}> <img src={arrowLeft} alt='Left Arrow' class="arrow-left" /></div>)}
          {length > 1 && (<div onClick={changePictures}><img src={arrowRight} alt='Right Arrow' class="arrow-right" /> </div>)}
          <p class="other-pic">{current + 1}/{move.pictures.length}</p>
          {move.pictures.map((images, pointer) => {
            return (
              <figure class="image-slide" key={pointer}>
                {pointer === current && (<img src={images} alt="Exemple of place" class='slideshow-img' />)}
              </figure>
            )
          })}
        </div>
    )
}
export default ImagesSlide ;