import Button from "../button/Button";

const CartItem = () => {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-28"
        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
        alt=""
      />
      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>
        <div className="mt-2">
          <Button className="mr-2" variant="danger">
            Remove
          </Button>
          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
