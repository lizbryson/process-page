import './ListItem.css';

const ListItem = ({ item, index }) => {
  const handleClick = ({ target }) => {
    target.classList.toggle('active');
  }

  const listClasses = index === 0 ? 'active' : 'collapsed';
  return (
    <li className={listClasses} onClick={handleClick}><a className="toggleBtn">{item}</a><p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.</p></li>
  )
}

export default ListItem;