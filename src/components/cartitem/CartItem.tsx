import { useEffect, useState } from "react";
import Button from "../button/Button";
import type { ProductsType } from "../../types/servertype";
import { getProdcutDetail } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShoppingCartContex";
import { Link } from "react-router-dom";

interface ICartItems {
  id: number;
  qty: number;
}
const CartItem = ({ id, qty }: ICartItems) => {
  const [product, setProduct] = useState<ProductsType>();
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProductCart,
  } = useShoppingCartContext();

  useEffect(() => {
    getProdcutDetail(id).then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <div key={id} className="flex flex-row-reverse mt-4 border-b pb-2">
      <Link to={`/product/${id}`}>
        <img className="rounded w-28" src={product?.image} alt="" />
      </Link>
      <div className="mr-4">
        <h3 className="text-right"> {product?.title}</h3>
        <div className="mt-2">
          <Button
            onClick={() => handleRemoveProductCart(id)}
            className="mr-2"
            variant="danger"
          >
            Remove
          </Button>
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span className="mx-2">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
