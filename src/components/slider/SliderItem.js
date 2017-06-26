/**
 * @namespace compnent
 */

import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


/**
 * @function SliderItem
 * @param {Object} props Properties for SliderItem
 * @return {XML}
 */
function SliderItem({title, subtitle, img, imgAlt}) {
  return (
    <Card>
      <CardMedia
        overlayContentStyle={{bottom:'inherit'}}
        overlay={<CardTitle title={`The project is based on ${title}`} subtitle={subtitle}/>}
      >
        <img src={img} alt={imgAlt}/>
      </CardMedia>
    </Card>
  );
}

export default SliderItem;
