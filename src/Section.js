import ListItem from './Components/ListItem/ListItem';

const Section = ({ sectionIndex, content }) => {
  const sectionSteps = content.steps.map((item, index) => <ListItem key={'toggle_' + index} item={item} index={index}/>);
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
          <div className="example-image">
            <div className="example-image__inner">
              <div></div>
            </div>
          </div>
        </div>
   
      </div>
    </section>
  )
}

export default Section;