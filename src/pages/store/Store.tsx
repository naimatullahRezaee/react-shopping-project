import ProductItem from "../../components/productitem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPorducts } from "../../services/api";
import type { ProductsType } from "../../types/servertype";

const Store = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  useEffect(() => {
    getPorducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدیدترین محصولات</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-3 gap-4 mt-4">
          {products.map((item) => (
            <Link to={`/product/${item.id}`}>
              <ProductItem key={item.id} {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
