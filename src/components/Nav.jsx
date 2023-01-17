import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Nav = ({ openCart }) => {
  return (
    <div className="width-max h-20 text-2xl bg-purple-200">
      <ul className="flex flex-row justify-end p-2">
        <li className="p-2">
          <Link to="/">Main</Link>
        </li>
        <li className="p-2">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="p-2">
          <button onClick={openCart}>
            <FaShoppingCart className="m-2" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
