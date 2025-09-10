import type { ProductsType } from "../../types/servertype";

type ProductItemType = ProductsType;

const ProductItem = ({ title, price, image, description }: ProductItemType) => {
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between  px-4 mt-2">
        <h3 className="line-clamp-1 font-bold"> {title}</h3>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
