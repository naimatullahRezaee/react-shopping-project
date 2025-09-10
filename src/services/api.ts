import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getPorducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProdcutDetail(id: string | number) {
  const { data } = await client(`/products/${id}`);
  return data;
}
