import './ListItem.css';
import { gsap } from "gsap"

const ListItem = ({ item, index, setImage, setLayout }) => {

  const animateLayout = (style) => {
    if (style === 'single') {
      gsap.to(".example-image__img", {
        width: '84%', duration: 1
      });
    } else {
      gsap.to(".example-image__img", {
        width: '50%', duration: 1
      });
    }
  } 
  
  const handleClick = ({ target }) => {
    // let parent = target.parentElement;
    let currentDesc = target.children[1];
    gsap.to(currentDesc, {
      height: 100
    })
  
    // Array.from(a).forEach(x => {
    //   gsap.to(x.children[1], {
    //   height: 0
    //   })
    // });

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
        {item.link && <a href={item.link.url}>View in Figma</a>}
      </div>

    </li>
  )
}

export default ListItem;