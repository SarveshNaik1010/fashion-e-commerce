import { useParams } from 'react-router-dom';
import { getProductById } from '../product-api';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from '../slices/cartSlice';

import QuantityButton from '../UI/QuantityButton';
import Loading from '../UI/Loading';

function IndividualProduct() {
  const { id } = useParams();

  const { data = {}, isLoading } = useQuery({
    queryKey: ['single-product', id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <Loading />;

  const { title, category, description, price, rating, image } = data.data;

  return (
    <div className="m-auto my-10 flex w-[80lvw] flex-col items-center justify-center gap-10 md:flex-row">
      <div className="md:w-[50%]">
        <img src={image} alt={title} className="w-[100%] md:h-[40lvh]" />
      </div>
      <div className="space-y-4">
        <p className="title-font text-md text-[28px] font-semibold md:text-[32px]">
          {title}
        </p>
        <p className="text-[16px] text-stone-600">{description}</p>
        <p className="text-sm text-gray-500">
          <span className="text-[16px] font-semibold">Category:</span>{' '}
          {category}
        </p>
        <div className="flex items-center gap-2 text-[16px]">
          <p className="text-[16px] text-sm md:text-xl">{`⭐ ${rating.rate}`}</p>
          <p className="text-[16px] text-sm text-gray-500 md:text-xl">{`(${rating.count})`}</p>
        </div>
        {/* <div className="flex items-center justify-between">
          <p className="title-font text-md font-semibold text-gray-900 md:text-xl">
            $ {price}
          </p>
          {isInCart ? (
            <QuantityButton id={id} currentQuantity={currentQuantity} />
          ) : (
            <Button>Add To Cart</Button>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default IndividualProduct;
