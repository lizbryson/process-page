import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './ImageHalf.css';
// import { gsap } from "gsap"

// import { useEffect } from 'react';

const ImageHalf = ({ image, style }) => {

  // useEffect(() => {
  //   console.log('ue');
  //   gsap.to(".example-image__img", {
  //     rotation: 27, x: 100, duration: 1
  //   });

  // }, [style])

  return (
    <div className={`example-image is-${style}`}>
      <div className="example-image__inner">
        <div className="example-image__img">
          {/* <span className="example-image__dot">
            <a href="https://www.lizbryson.co/projects/the-halsey-wedding/" target="_blank" rel="noreferrer">Project: The Halsey Wedding</a>
            <span></span>
          </span> */}
        <LazyLoadImage
          alt="Goals and Methodology"
          effect="opacity"
            src={image} />
          </div>
      </div>
    </div>
  )
}

export default ImageHalf;