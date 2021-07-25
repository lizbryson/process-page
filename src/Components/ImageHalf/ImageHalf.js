import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './ImageHalf.css';

const ImageHalf = ({ images, style }) => {

  const generateImages = () => images.map(image => {
    return (
      <div className="example-image__img">
        <LazyLoadImage
          alt="Goals and Methodology"
          effect="opacity"
          src={image.src} />
      </div>
    )
  })

  return (
    <div className={`example-image is-${style}`}>
      <div className="example-image__inner">
        {generateImages()}
      </div>
    </div>
  )
}

export default ImageHalf;