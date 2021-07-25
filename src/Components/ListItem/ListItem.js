import './ListItem.css';

const ListItem = ({ item, index, setImage }) => {
  const handleClick = ({ target }) => {
    let parent = target.parentElement;
    let a = parent.getElementsByClassName("active");
    console.log(a);
    Array.from(a).forEach(x => x.classList.remove('active'));

    setImage(item.image);
    target.classList.toggle('active');
  }

  const listClasses = index === 0 ? 'active' : 'collapsed';
  return (
    <li className={listClasses} onClick={handleClick}>
      <a href="/" className="toggleBtn">{item.title}</a>
      <div className="item__description">
        <p>{item.description}</p>
        {item.link && <a href={item.link.url}>View in Figma</a>}
      </div>

    </li>
  )
}

export default ListItem;