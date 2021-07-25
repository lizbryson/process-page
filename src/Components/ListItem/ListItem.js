import './ListItem.css';
import { gsap } from "gsap"

const ListItem = ({ item, index, setImage, setLayout, id }) => {

  const animateLayout = (style) => {
    const targetClass = '.example-image__img.is-' + id;
    if (style === 'single') {
      gsap.to(targetClass, {
        width: '84%', duration: 1,
        left: '8%', top: '15%'
      });
    } else if (style === 'triple') {
    } else {
      gsap.to(targetClass, {
        width: '50%', duration: 1
      });
    }
  } 
  
  const handleClick = ({ target }) => {
    let currentDesc = target.children[1];
    gsap.to(currentDesc, {
      height: 150
    })
  
    setImage(item.images);
    setLayout((prevStyle) => {
      if (item.style && (prevStyle !== item.style)) {
        animateLayout(item.style);
      }
      return item.style;
    });

  }

  const listClasses = index === 0 ? 'test' : 'collapsed';
  return (
    <li className={listClasses} onClick={handleClick}>
      <span className="toggleBtn">{item.title}</span>
      <div className="item__description">
        <p>{item.description}</p>
        {item.link && <a href={item.link.url} target="_blank" rel="noreferrer">View in {item.link.type}</a>}
      </div>

    </li>
  )
}

export default ListItem;