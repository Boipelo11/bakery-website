import './Menu.css';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import menu from '../../Constants/menu';

const Menu = () => {
  const menus = menu

  return (
    <div className="menu">
      <div className="menu-card">
        {menus.map((menuItem) => (
          <div className="menu-item" key={menuItem.id}>
            <img className="card-img" src={menuItem.img} />
            <div className="menu-content">
              <div className="texts">
                <h3 className="title">{menuItem.type}</h3>
                <h4 className="category">Category: {menuItem.category}</h4>
                <p className="price">Price: R{menuItem.price}</p>
              </div>
              <div className="menu-icons">
                <AiOutlineHeart className="icon-1" />
                <FaCartPlus className="icon-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
