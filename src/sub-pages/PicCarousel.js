import React from 'react';
import Title from '../Title';
import { NavLink } from 'react-router-dom';

import InfiniteCarousel from 'react-leaf-carousel';

import '../style/piccarousel.css';

const PicCarousel = ({pictures}) => {
  return (
    <div>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={1}
        sideSize={.1}
        slidesToScroll={2}
        slidesToShow={2.5}
        scrollOnDevice={true}
      >
       {
         pictures.map((pic, index) => {
           return (
             <div key={index}>
               <img 
                alt={pic}
                src={pic}
               />
             </div>
           )
         })
       }
      </InfiniteCarousel>
      <NavLink to="/">
        <Title title={'Back to the home page'} />
      </NavLink>
    </div>
  );
};

export default PicCarousel;