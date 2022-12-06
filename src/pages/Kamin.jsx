import React, { useState } from 'react';
import Loft_bg from '../images/home_bg_edited.jpg';

import Carousel from 'react-bootstrap/Carousel';

import bio1 from '../images/bio_images/bio1.jpeg';
import bio2 from '../images/bio_images/bio2.jpeg';
import bio3 from '../images/bio_images/bio3.jpeg';
import bio4 from '../images/bio_images/bio4.jpeg';
import bio5 from '../images/bio_images/bio5.jpeg';
import bio6 from '../images/bio_images/bio6.jpeg';
import bio7 from '../images/bio_images/bio7.jpeg';
import bio8 from '../images/bio_images/bio8.jpeg';
import bio9 from '../images/bio_images/bio9.jpeg';
import bio10 from '../images/bio_images/bio10.jpeg';



  

const Kamin = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);


  return (
    <div className='very_main_kamin'>
      <img className="kamin_bg" src={Loft_bg} alt="error" />
      <div className="loft_desc">
            <div className="main_block_kamin">
              <div className="left_kamin">
                <h1>Биокамины</h1>
                <div className='line'></div>
                <div className="left_loft_desc">Биокамин — это современное устройство с живым пламенем, не нуждающееся в дымовой вентиляции и не предполагающее использования деревянных поленьев. Его конструкция включает в себя топливный блок и декоративную отделку.</div>
              </div>
              <div className="right_loft">
                <Carousel className='carousel' slide={false}>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={bio8}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      id='extra_img'
                      className="d-block top_carousel_img"
                      src={bio4}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='carousel_item'>
                    <img
                      className="d-block top_carousel_img"
                      src={bio2}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="loft_types_title">Виды биокаминов</div>
            <div className="low_bio_block">
            <img className="kamin_bg_low" src={Loft_bg} alt="error" />
              <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}  className="shower_card">
                {hover ? (<div className='hover_kamin'>
                  <h2>Торцевой</h2>
                  <p>Зонирует пространство, <br /> визуально увеличивая его площадь!</p>
                </div>) : null}
                <img src={bio1} alt="" />
              </div>
              <div onMouseEnter={() => setHover2(!hover2)} onMouseLeave={() => setHover2(!hover2)}  className="shower_card">
                {hover2 ? (<div className='hover_kamin'>
                  <h2>Сквозной</h2>
                  <p>Отличное решение для больших проёмов. Совмещает в себе практичность и функциональность!</p>
                </div>) : null}
                <img src={bio6} alt="" />
              </div>
              <div onMouseEnter={() => setHover3(!hover3)} onMouseLeave={() => setHover3(!hover3)}  className="shower_card">
                {hover3 ? (<div className='hover_kamin'>
                  <h2>Глухой</h2>
                  <p>Сохраняя классический вид, <br /> придаёт интерьеру свою изюминку!</p>
                </div>) : null}
                <img src={bio9} alt="" />
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

export default Kamin