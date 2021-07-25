import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './ImageHalf.css';

const ImageHalf = ({ image, style }) => {

  return (
    <div className={`example-image is-${style}`}>
      <div className="example-image__inner">
        <div className="example-image__img">
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