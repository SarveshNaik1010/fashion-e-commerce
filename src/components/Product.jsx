import reducer, {
  addItem,
  getCart,
  getCurrentQuantityById,
} from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../UI/Button';
import QuantityButton from '../UI/QuantityButton';
import Error from '../UI/Error';
import { IoIosStar } from 'react-icons/io';

function Product({ product }) {
  const { id, title, category, description, price, rating, image } = product;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart(e) {
    e.preventDefault();
    const newItem = { ...product, quantity: 1, totalPrice: price };
    dispatch(addItem(newItem));
  }

  if (!title) return <Error message="No products found" />;

  return (
    <div
      className={`flex w-[90%] flex-col gap-2 bg-white p-2 shadow-lg md:p-6`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="m-auto h-[150px] md:h-[200px]"
        />
      </div>
      <p className="title-font text-md font-semibold md:text-xl">
        {title.slice(0, 20)}
      </p>
      <p className="hidden text-sm text-stone-600 md:block">
        {description.slice(0, 100)}...
      </p>
      <p className="hidden text-sm text-gray-500 md:block">
        <span className="font-semibold">Category:</span> {category}
      </p>
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-sm">{`⭐ ${rating.rate}`}</p>
          <p className="text-sm text-gray-500">{`(${rating.count})`}</p>
        </div>
        <p className="title-font text-md font-semibold text-gray-900 md:text-xl">
          $ {price}
        </p>
      </div>
      {isInCart ? (
        <QuantityButton id={id} currentQuantity={currentQuantity} />
      ) : (
        <Button onClick={handleAddToCart}>Add To Cart</Button>
      )}
    </div>
  );
}

export default Product;
