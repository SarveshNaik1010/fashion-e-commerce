import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

function ProductCard() {
  const res = useGetProduct(id);
  return <div>{title}</div>;
}

export default ProductCard;
