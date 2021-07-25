import LazyLoad from 'react-lazyload';
import './ImageHalf.css';

const ImageHalf = ({ images, style }) => {

  const generateImages = () => images.map((image, index) => {
    return (
      <LazyLoad
        key={`project-image_${index}`}
        className="example-image__img">
          <img alt="Goals and Methodology"
          effect="opacity"
          src={image.src} />
        </LazyLoad>
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