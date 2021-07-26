import { useEffect, useState, useRef } from 'react';
import ListItem from './Components/ListItem/ListItem';
import ImageHalf from './Components/ImageHalf/ImageHalf';
import { animateLayout } from './utils';

const Section = ({ sectionIndex, content }) => {
  
  const isInitialMount = useRef(true);
  const [images, setImage] = useState(content.steps[0].images);
  const [layout, setLayout] = useState(content.steps[0].style || 'double');


  useEffect(() => {
    content.steps.forEach(item => {
      const img = new Image();
      img.src = item.image;
    })
  }, [content.steps]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      animateLayout(layout, content.title);
    }

  }, [content.title, layout]);

  const sectionSteps = content.steps.map((item, index) => (
    <ListItem key={'toggle_' + index}
              item={item}
              index={index}
              setImage={setImage}
              setLayout={setLayout}
    />
  ));
  
  return (
    <section id={content.title.toLowerCase()}>
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
          <ImageHalf images={images} style={layout} id={content.title.toLowerCase()} />
        </div>
   
      </div>
    </section>
  )
}

export default Section;

