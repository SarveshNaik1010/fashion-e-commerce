import { useSelector } from 'react-redux';
import { getTotalCartPrice } from '../slices/cartSlice';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { useState } from 'react';

function TotalBill({ totalItemsPrice }) {
  const delivery = 100;
  const discount = 12;
  const price = totalItemsPrice + delivery;
  const totalPrice = Math.round(price - price * (discount / 100));

  return (
    <div className="my-[24px] w-full max-w-sm bg-white p-6 shadow-md md:w-[70%] xl:w-full">
      {/* Order Value */}
      <div className="mb-4 flex justify-between">
        <span className="text-gray-700">Order value</span>
        <span className="title-font font-semibold text-gray-900">
          $ {totalItemsPrice}
        </span>
      </div>

      {/* Delivery */}
      <div className="mb-4 flex justify-between">
        <span className="text-gray-700">Delivery Charges</span>
        <span className="title-font font-semibold text-red-600">
          $ {delivery}
        </span>
      </div>

      {/* Discount */}
      <div className="mb-4 flex justify-between">
        <span className="text-gray-700">Discount</span>
        <span className="title-font font-semibold text-green-600">
          {discount}%
        </span>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-300"></div>

      {/* Total */}
      <div className="mb-6 flex justify-between">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <span className="title-font text-lg font-bold text-gray-900">
          $ {totalPrice}
        </span>
      </div>

      <Button>Continue to checkout</Button>
    </div>
  );
}

export default TotalBill;
