import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContex";
import Button from "../button/Button";

const Navbar = () => {
  const { cartQty, handleLogout } = useShoppingCartContext();
  return (
    <div className="h-8 border-b shadow flex  items-center ">
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه </Link>
            </li>
            <li className="ml-4">
              <Link to="/store"> فروشگاه</Link>
            </li>
          </ul>
          <div>
            <Button onClick={handleLogout}>Logout</Button>
            <Link to="/cart" className="relative">
              <Link to="/cart">سبد خرید</Link>

              <span
                className="absolute w-5 h-5 bg-red-600 flex justify-center items-center rounded-full text-white -top-1
                -right-3 text-xs"
              >
                {cartQty !== 0 ? cartQty : ""}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
