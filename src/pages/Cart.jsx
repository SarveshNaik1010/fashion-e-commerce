import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../slices/cartSlice';
import Product from '../components/Product';
import TotalBill from '../components/TotalBill';
import Error from '../UI/Error';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { useState } from 'react';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalPrice = Math.round(useSelector(getTotalCartPrice));

  if (cart.length === 0)
    return (
      <Error>
        Your cart is empty!{' '}
        <Link className="title-font underline" to="/all-products">
          Start Shopping
        </Link>
      </Error>
    );

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="my-[24px] flex w-[100%] flex-col items-start md:flex-row">
      <div className="grid w-[100lvw] space-y-4 px-[24px] xl:w-[60%]">
        {cart.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
        <Button extraStyles="w-fit" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
      <TotalBill totalItemsPrice={totalPrice} />
    </div>
  );
}

export default Cart;
