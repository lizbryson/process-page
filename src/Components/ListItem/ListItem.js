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
      <p>{item.description}</p>
    </li>
  )
}

export default ListItem;