import './ListItem.css';
import { gsap } from "gsap"

const ListItem = ({ item, index, setImage, setLayout }) => {

  const animateLayout = (style) => {
    // console.log(style);
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
    let parent = target.parentElement;
    let a = parent.getElementsByClassName("active");
    Array.from(a).forEach(x => x.classList.remove('active'));
    target.classList.toggle('active');

    setImage(item.image);
    setLayout((prevStyle) => {
      console.log('prev: ' + prevStyle);
      console.log('next: ' + item.style);
      if (item.style && (prevStyle !== item.style)) {
        console.log('change style');
        animateLayout(item.style);
      }
      return item.style;
    });

  }

  const listClasses = index === 0 ? 'active' : 'collapsed';
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