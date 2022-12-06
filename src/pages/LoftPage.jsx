import { style, width } from '@mui/system';
import React, { useState } from 'react';
import Loft_bg from '../images/home_bg_edited.jpg';

// cards imgs 
import Main_Loft from '../images/loft main pic.jpg';
import Static from '../images/static.jpg';
import loft1 from "../images/loft_images/loft1.jpeg";
import loft2 from "../images/loft_images/loft2.jpeg";
import loft3 from "../images/loft_images/loft3.jpeg";
import loft4 from "../images/loft_images/loft4.jpg";
import loft5 from "../images/loft_images/loft5.jpg";
import loft6 from "../images/loft_images/loft6.jpg";
import loft7 from "../images/loft_images/loft7.jpg";
import loft8 from "../images/loft_images/loft8.jpg";
import loft9 from "../images/loft_images/loft9.jpg";
import loft10 from "../images/loft_images/loft10.jpg";
import loft11 from "../images/loft_images/loft11.jpeg";

import Carousel from 'react-bootstrap/Carousel';




const LoftPage = () => {

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  // const [hover4, setHover4] = useState(false);
  // const [hover5, setHover5] = useState(false);


  return (
    <div className='very_main_loft'>
      <img className="loft_bg" src={Loft_bg} alt="error" />
      <div className="loft_desc">
            <div className="main_block_loft">
              <div className="left_loft">
                <h1>ЛОФТ</h1>
                <div className='line'></div>
                <div className="left_loft_desc">Перегородки лофт представляют собой сварные металлические конструкции с заполнением из стекла. Конструкции используют для зонирования внутреннего пространства коммерческих и жилых помещений.</div>
              </div>
              <div className="right_loft">
                {/* <img src={Main_Loft} alt="" /> */}
                <Carousel className='carousel' slide={false}>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={loft1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      id='extra_img'
                      className="d-block top_carousel_img"
                      src={loft3}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={loft2}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="loft_types_title">Виды перегородок</div>
            <div className="low_block">
            <img className="loft_bg_low" src={Loft_bg} alt="error" />
              <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}  className="loft_card">
                {hover ? (<div className='hover_div'>
                  <h2>Статичная</h2>
                  <p>Зонирует пространство, <br /> визуально увеличивая его площадь!</p>
                </div>) : null}
                <img src={Static} alt="" />
              </div>
              <div onMouseEnter={() => setHover2(!hover2)} onMouseLeave={() => setHover2(!hover2)}  className="loft_card">
                {hover2 ? (<div className='hover_div'>
                  <h2>Раздвижная</h2>
                  <p>Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!</p>
                </div>) : null}
                <img src={loft4} alt="" />
              </div>
              <div onMouseEnter={() => setHover3(!hover3)} onMouseLeave={() => setHover3(!hover3)}  className="loft_card">
                {hover3 ? (<div className='hover_div'>
                  <h2>Распашная</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={loft10} alt="" />
              </div>
            </div>
            <div className="loft_adv_title">Преимущества лофт-перегородок</div>
            {/* list  */}
            <div className="adv">
            <img className="loft_bg_low2" src={Loft_bg} alt="error" />
            <div className="adv_top">
              <div className="adv_top_img">
                {/* <img src={Main_Loft} alt="" /> */}
                <Carousel style={{display: 'flex', justifyContent: 'center'}} slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft5}
          alt="First slide"
        />
        <Carousel.Caption className='loft_caption'>
          <h3>Лаконичность дизайна</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft6}
          alt="Second slide"
        />
        <Carousel.Caption className='loft_caption'>
          <h3>Вариативность цветовых решений</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft7}
          alt="Third slide"
        />
        <Carousel.Caption className='loft_caption'>
          <h3>Звукоизоляция</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft8}
          alt="Third slide"
        />
        <Carousel.Caption className='loft_caption'>
          <h3>Долговечность</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft11}
          alt="Third slide"
        />
        <Carousel.Caption className='loft_caption'>
          <h3>Простота ухода и обслуживания</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
              </div>
              <div className="adv_desc">
                <ol>
                  <li>Лаконичность дизайна</li>
                  <li>Вариативность цветовых решений</li>
                  <li>Хорошие звукоизоляционные характерстики</li>
                  <li>Долговечность</li>
                  <li>Простота ухода и обслуживания</li>
                </ol>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LoftPage