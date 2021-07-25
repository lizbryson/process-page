import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './ImageHalf.css';

const ImageHalf = ({ image }) => {
  return (
    <div className="example-image">
      <div className="example-image__inner">
        <div>
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