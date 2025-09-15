import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContex";

const Navbar = () => {
  const { cartQty } = useShoppingCartContext();
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
            <Link to="/cart" className="relative">
              <button>سبد خرید</button>

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
