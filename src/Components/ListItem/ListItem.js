import './ListItem.css';

const ListItem = ({ item, index, setImage, setLayout, id, images, layout}) => {

  
  const handleClick = ({ target }) => {  
    setImage(item.images);
    setLayout(item.style);
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