import React, { useState } from 'react';
import Loft_bg from '../images/home_bg_edited.jpg';

import Carousel from 'react-bootstrap/Carousel';

import show1 from "../images/dusheviye_images/show1.jpeg";
import show2 from "../images/dusheviye_images/show2.jpeg";
import show3 from "../images/dusheviye_images/show3.jpeg";
import show4 from "../images/dusheviye_images/show4.jpeg";
import show5 from "../images/dusheviye_images/show5.jpeg";
import show6 from "../images/dusheviye_images/show6.jpeg";


const DushPage = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  return (
    <div style={{marginTop: '7%'}}>
      <img className="loft_bg" src={Loft_bg} alt="error" />
      <div className="loft_desc">
            <div className="main_block_dush">
              <div className="left_shower">
                <h1>Душевые</h1>
                <div className='line'></div>
                <div className="left_loft_desc">Душевые перегородки из стекла очень популярны в современных интерьерах ванных комнат, так как изящно, просто и надежно трансформируют пространство, создавая новые конструкции и функциональные возможности этой комнаты.</div>
              </div>
              <div className="right_loft">
                <Carousel className='carousel' slide={false}>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={show1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      id='extra_img'
                      className="d-block top_carousel_img"
                      src={show2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={show3}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={show4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={show5}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={show6}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="loft_types_title">Виды душевых перегородок</div>
            <div className="low_shower_block">
            <img className="dush_bg_low" src={Loft_bg} alt="error" />
              <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}  className="shower_card">
                {hover ? (<div className='hover_shower'>
                  <h2>Угловая распашная</h2>
                  <p>Зонирует пространство, <br /> визуально увеличивая его площадь!</p>
                </div>) : null}
                <img src={show1} alt="" />
              </div>
              <div onMouseEnter={() => setHover2(!hover2)} onMouseLeave={() => setHover2(!hover2)}  className="shower_card">
                {hover2 ? (<div className='hover_shower'>
                  <h2>Раздвижная</h2>
                  <p>Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!</p>
                </div>) : null}
                <img src={show4} alt="" />
              </div>
              <div onMouseEnter={() => setHover3(!hover3)} onMouseLeave={() => setHover3(!hover3)}  className="shower_card">
                {hover3 ? (<div className='hover_shower'>
                  <h2>Трапеция</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={show6} alt="" />
              </div>
              <div onMouseEnter={() => setHover4(!hover4)} onMouseLeave={() => setHover4(!hover4)}  className="shower_card">
                {hover4 ? (<div className='hover_shower'>
                  <h2>Гармошка</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={show2} alt="" />
              </div>
              <div onMouseEnter={() => setHover5(!hover5)} onMouseLeave={() => setHover5(!hover5)}  className="shower_card" id="static_dush">
                {hover5 ? (<div className='hover_div_stat'>
                  <h2>Статичная</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={show3} id="extra_fix" alt="" />
              </div>
            </div>
            {/* <div className="loft_adv_title">Преимущества лофт-перегородок</div> */}
            {/* list  */}
            {/* <div className="adv">
            <img className="loft_bg_low" src={Loft_bg} alt="error" />
            <div className="adv_top">
              <div className="adv_top_img">
                {/* <img src={Main_Loft} alt="" /> */}
             {/*   <Carousel style={{display: 'flex', justifyContent: 'center'}} slide={false}>
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
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default DushPage