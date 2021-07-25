import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageHalf = ({ image }) => {
  return (
    <div className="example-image">
      <div className="example-image__inner">
        <div>
        <LazyLoadImage
          alt="Goals and Methodology"
          effect="blur"
            src={image} />
          </div>
      </div>
    </div>
  )
}

export default ImageHalf;