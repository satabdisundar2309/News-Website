import React from 'react'
import Slider from "react-slick"
import { popular } from "../../../dummyData"
function SinglePageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <>
         <section className='singlePopular'>
        <div className='content'>
          <Slider {...settings}>
            {popular.map((val,i) => {
              return (
                <div key={i} className='items'>
                  <div className='box'>
                    <div className='images'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default SinglePageSlider