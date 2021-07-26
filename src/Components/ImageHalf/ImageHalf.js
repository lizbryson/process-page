import LazyLoad from 'react-lazyload';
import './ImageHalf.css';

const ImageHalf = ({ images, style, id }) => {

  // const generateImages = () => images.map((image, index) => {
  //   return (
  //     <LazyLoad
  //       key={`project-image_${index}`}
  //       className={`example-image__img is-${id}`}>
  //         <img alt="Goals and Methodology"
  //         effect="opacity"
  //         src={image.src} />
  //       </LazyLoad>
  //   )
  // })
  const generateImages = () => {
    const imageArr = [];
    for (let i = 0; i < 3; i++) {
      if (images[i]) {
        imageArr.push(
          <LazyLoad
            key={`project-image_${i}`}
            className={`example-image__img is-${id}`}>
            <img alt="Goals and Methodology"
              effect="opacity"
              src={images[i].src} />
          </LazyLoad>
        )
      } else {
        imageArr.push(<div key={`project-image_${i}`} className={`example-image__img is-${id} is-empty`}></div>);
      }
    }
    return imageArr;
  }

  return (
    <div className={`example-image is-${style}`}>
      <div className="example-image__inner" id={'images_' + id}>
        {generateImages()}
      </div>
    </div>
  )
}

export default ImageHalf;