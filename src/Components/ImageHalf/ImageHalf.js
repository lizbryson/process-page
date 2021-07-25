const ImageHalf = ({image}) => {
  return (
    <div className="example-image">
      <div className="example-image__inner">
        <div>
          <img src={image} alt="Goals and Methodology" />
        </div>
      </div>
    </div>
  )
}

export default ImageHalf;