import { useState } from 'react';
import ListItem from './Components/ListItem/ListItem';
import ImageHalf from './Components/ImageHalf/ImageHalf';


const Section = ({ sectionIndex, content }) => {
  
  const [image, setImage] = useState(content.steps[0].image);

  const sectionSteps = content.steps.map((item, index) => <ListItem key={'toggle_' + index} item={item} index={index} setImage={setImage}/>);
  return (
  <section>
      <div className="container">
        <div className="section-header">
          <p className="step">{sectionIndex}</p>
          <h1>{content.title}</h1>
        </div>
        <p className="section-intro">{content.intro}</p>
        <div className="example-container">
          <ul className="btn-container">
            <li>How I {content.title}:</li>
            { sectionSteps }
          </ul>
          <ImageHalf image={image} />
        </div>
   
      </div>
    </section>
  )
}

export default Section;

