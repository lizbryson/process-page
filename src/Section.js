import { useEffect, useState, useRef } from 'react';
import ListItem from './Components/ListItem/ListItem';
import ImageHalf from './Components/ImageHalf/ImageHalf';
import { gsap } from "gsap"

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

  const animateLayout = (style) => {
    const targetClass = '.example-image__img.is-' + content.title.toLowerCase();
    if (style === 'single') {
      gsap.to(targetClass, {
        width: function (index) {
          if (index === 0) {
            return '84%';
          }
        },
        duration: 1,
        left: '8%',
        top: '15%',
        autoAlpha: function (index) {
          if (index !== 0) {
            return 0
          } else {
            return 1
          }
        }
      });
    } else if (style === 'double') {
      gsap.to(targetClass, {
        duration: 1,
        width: function (index) {
          if (index <= 1) {
            return '50%';
          }
        },
        left: function (index) {
          if (index === 0) {
            return '8%'
          } else {
            return 'auto'
          }
        },     
        top: function (index) {
          if (index === 0) {
            return '15%'
          } else {
            return 'auto'
          }
        },
        right: function (index) {
          if (index === 1) {
            return '8%'
          } else {
            return 'auto'
          }
        },
        bottom: function (index) {
           if (index === 1) {
            return '15%'
          } else {
            return 'auto'
          }
        },
        autoAlpha: function (index) {
          if (index > 1) {
            return 0
          } else {
            return 1
          }
        }
      });
    }
  }

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      animateLayout(layout);
    }

  }, [content.title, layout]);

  const sectionSteps = content.steps.map((item, index) => (
    <ListItem key={'toggle_' + index}
              item={item}
              index={index}
              layout={layout}
              images={images}
              setImage={setImage}
              setLayout={setLayout}
              id={content.title.toLowerCase()}
    />)
  );
  
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

