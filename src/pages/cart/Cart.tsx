import Button from "../../components/button/Button";
import CartItem from "../../components/cartitem/CartItem";
import Container from "../../components/container/Container";

const Cart = () => {
  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="bg-gray-200 rounded p-6">
          <p className="text-right">قیمت کل: 3,000$</p>
          <p className="text-right">تخفیف شما: 1,000$</p>
          <p className="text-right">قیمت نهایی: 2,000$</p>
        </div>
        <Button variant="success" className="mt-2">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
};

export default Cart;
