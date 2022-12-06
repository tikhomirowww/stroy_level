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

import pot2 from '../images/potolki_images/pot2.jpeg';
import pot3 from '../images/potolki_images/pot3.jpeg';
import pot4 from '../images/potolki_images/pot4.jpeg';
import pot5 from '../images/potolki_images/pot5.jpeg';
import pot6 from '../images/potolki_images/pot6.jpeg';
import pot7 from '../images/potolki_images/pot7.jpeg';
import pot8 from '../images/potolki_images/pot8.jpeg';


import Carousel from 'react-bootstrap/Carousel';


const PotolkiPage = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  // const [hover4, setHover4] = useState(false);
  // const [hover5, setHover5] = useState(false);

  return (
    <div className='very_main_loft'>
      <img className="pot_bg" src={Loft_bg} alt="error" />
      <div className="loft_desc">
            <div className="main_block_pot">
              <div className="left_pot">
                <h1>Грильято</h1>
                <div className='line'></div>
                <div className="left_loft_desc">Грильято — ячеистый подвесной потолок, созданный дизайнерами из Италии более 50-ти лет назад.</div>
              </div>
              <div className="right_loft">
                {/* <img src={Main_Loft} alt="" /> */}
                <Carousel className='carousel' slide={false}>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={pot3}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      id='extra_img'
                      className="d-block top_carousel_img"
                      src={pot2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={pot4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="loft_types_title">Потолки грильято</div>
            <div className="low_pot_block">
            <img className="pot_bg_low" src={Loft_bg} alt="error" />
              <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}  className="loft_card">
                {hover ? (<div className='hover_div'>
                  <h2>Статичная</h2>
                  <p>Зонирует пространство, <br /> визуально увеличивая его площадь!</p>
                </div>) : null}
                <img src={pot5} alt="" />
              </div>
              <div onMouseEnter={() => setHover2(!hover2)} onMouseLeave={() => setHover2(!hover2)}  className="loft_card">
                {hover2 ? (<div className='hover_div'>
                  <h2>Раздвижная</h2>
                  <p>Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!</p>
                </div>) : null}
                <img src={pot6} alt="" />
              </div>
              <div onMouseEnter={() => setHover3(!hover3)} onMouseLeave={() => setHover3(!hover3)}  className="loft_card">
                {hover3 ? (<div className='hover_div'>
                  <h2>Распашная</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={pot7} alt="" />
              </div>
            </div>
            {/* <div className="loft_adv_title">Преимущества лофт-перегородок</div> */}
            {/* list  */}
            {/* <div className="adv">
            <img className="loft_bg_low" src={Loft_bg} alt="error" /> */}
            {/* <div className="adv_top">
              <div className="adv_top_img">
                <Carousel style={{display: 'flex', justifyContent: 'center'}} slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft6}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 top_carousel_img"
          src={loft11}
          alt="Third slide"
        />
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
            </div> */}
          {/* </div> */}
      </div>
    </div>
  )
}

export default PotolkiPage