import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { getProdcutDetail } from "../../services/api";
import type { ProductsType } from "../../types/servertype";

const Product = () => {
  const params = useParams<{ id: string }>();
  const [productsDetails, setProductDetails] = useState<ProductsType>();

  useEffect(() => {
    getProdcutDetail(params.id as string).then((result) => {
      setProductDetails(result);
    });
  });

  return (
    <div>
      <Container>
        <div className="h-60 shadow mt-4 grid grid-cols-12 bg-amber-400">
          <div className="col-span-9 p-4">
            <h1 className="text-right"> {productsDetails?.title}</h1>
            <div className="">
              <p className="text-right">قیمت: {productsDetails?.price}</p>
              <p className="text-right">{productsDetails?.description}</p>
            </div>
          </div>
          <div className="col-span-3 p-4 bg-sky-200">
            <img className="rounded " src={productsDetails?.image} alt="" />
            <div>
              <Button className="mt-2 w-full " variant="primary">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
