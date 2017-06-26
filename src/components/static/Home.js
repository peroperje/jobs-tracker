/**
 * @namespace component
 */

import React from 'react';

import Slider from '../slider/Slider';
import SliderItem from '../slider/SliderItem';

/**
 * @function Home
 * @return {XML}
 */
function Home() {
  const slider = [{
    title: 'React.js',
    subtitle: 'A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES',
    img: 'https://cdn.pixabay.com/photo/2017/01/12/16/12/banner-1975062_960_720.jpg',
    imgAlt: 'React'
  }, {
    title: 'Redux.js',
    subtitle: 'Redux is a predictable state container for JavaScript apps.',
    img: 'https://cdn.pixabay.com/photo/2017/01/13/01/14/banner-1976086_960_720.jpg',
    imgAlt: 'redux'
  }, {
    title: 'Material UI',
    subtitle: 'Material-UI came about from our love of React and Google\'s Material Design.',
    img: 'https://cdn.pixabay.com/photo/2017/01/13/01/22/banner-1976103_960_720.jpg',
    imgAlt: 'redux'
  },{
    title: 'React Router',
    subtitle: ' React Router is a collection of navigational components that compose declaratively with your application',
    img: 'https://cdn.pixabay.com/photo/2017/01/12/16/15/banner-1975070_960_720.jpg',
    imgAlt: 'redux'
  }];
  const sliderItems = slider.map((item, index) => <SliderItem key={index} {...item}/>);
  return <Slider>{sliderItems}</Slider>;
}

export default Home;
