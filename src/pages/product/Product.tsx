import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
// import { useParams } from "react-router-dom";

const Product = () => {
  //   const params = useParams;
  return (
    <div>
      <Container>
        <div className="h-60 shadow mt-4 grid grid-cols-12 bg-amber-400">
          <div className="col-span-9 p-4">
            <h1 className="text-right">عنوان محصول</h1>
            <div className="">
              <p className="text-right">قیمت: 25</p>
              <p className="text-right">
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آ
              </p>
            </div>
          </div>
          <div className="col-span-3 p-4 bg-sky-200">
            <img
              className="rounded "
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
              alt=""
            />
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
