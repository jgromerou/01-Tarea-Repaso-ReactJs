import MenuItem from './MenuItem';

const MenuBar = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item ">
        <MenuItem />
      </li>
      <li className="nav-item ">
        <MenuItem />
      </li>
      <li className="nav-item ">
        <MenuItem />
      </li>
    </ul>
  );
};

export default MenuBar;
