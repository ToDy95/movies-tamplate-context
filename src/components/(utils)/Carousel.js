import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselComponent = ({ data }) => {
  return (
    <Carousel>
      {data?.map(item, index) => {
         return (
      <div key={index}>
        <img src={item} />
        {/* <p className="legend">Legend 1 (optional)</p> */}
      </div>
      )
      }}
    </Carousel>
  )
}

export default CarouselComponent
