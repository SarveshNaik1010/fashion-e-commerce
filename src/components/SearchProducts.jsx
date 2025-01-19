import Product from './Product';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../product-api';
import { Link } from 'react-router-dom';
import Loading from '../UI/Loading';

function SearchProducts({ isAscending }) {
  const { data: productData = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <Loading />;

  const sortedData = isAscending
    ? productData.sort((a, b) => a.price - b.price)
    : productData.sort((a, b) => b.price - a.price);

  return (
    <div className="w-[100lvw]">
      {/* Products */}
      <div className="mt-10 grid h-[90lvh] grid-cols-2 place-items-center gap-x-0 gap-y-4 overflow-x-scroll xl:mt-10 xl:grid xl:h-[90lvh] xl:grid-cols-3 xl:place-items-center xl:gap-12 xl:overflow-x-scroll xl:px-[24px]">
        {sortedData.map((pro) => {
          return (
            <Link
              to={`/product/${pro.id}`}
              className="flex justify-center"
              key={pro.id}
            >
              <Product product={pro} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchProducts;
