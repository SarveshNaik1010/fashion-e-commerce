import {
  HiMenu,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
  HiShoppingCart,
} from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import {
  getCurrentQuantityById,
  getTotalCartQuantity,
} from '../slices/cartSlice';

function AppLayout({ isAscending, setIsAscending, isOpen, handleIsOpen }) {
  const [searchQuery, setSearchQuery] = useState('');

  const queryClient = useQueryClient();
  const products = queryClient.getQueryData(['products']);

  const cartQuantity = useSelector(getTotalCartQuantity);

  function handleSearch() {
    const result = products.filter((pro) => pro.title.includes(searchQuery));
    queryClient.setQueryData(['products'], (oldData) => {
      return result;
    });
    setSearchQuery('');
  }

  // return (
  //   <div className="mt-4 h-fit w-[98lvw] overflow-hidden sm:mt-2">
  //     {/* <div className="flex h-[15%] items-center justify-between border-b-2 px-[24px]"> */}
  //     <div className="flex h-[15%] justify-center items-center border-b-2 px-[24px]">
  //       <Link to={'/all-products'} className="block">
  //         <h1 className="main-font text-xl font-semibold">Fashion Shoppie</h1>
  //       </Link>

  //       <div className="flex w-full items-center justify-center gap-[32px] p-[24px] md:w-[100%]">
  //         <div className="flex gap-7">
  //           <Input
  //             type="text"
  //             value={searchQuery}
  //             onChange={(e) => setSearchQuery(e.target.value)}
  //           />
  //           <Button onClick={handleSearch}>Search</Button>
  //         </div>

  //         <Button
  //           variant="iconButton"
  //           onClick={() => setIsAscending(!isAscending)}
  //         >
  //           {isAscending ? (
  //             <HiOutlineSortAscending />
  //           ) : (
  //             <HiOutlineSortDescending />
  //           )}
  //         </Button>
  //       </div>

  //       <div className="relative">
  //         {cartQuantity !== 0 && (
  //           <span className="title-font absolute right-[4px] top-0 text-stone-50">
  //             {cartQuantity}
  //           </span>
  //         )}
  //         <Button variant="primary" extraStyles="text-[20px]">
  //           <Link to="/cart">
  //             <HiShoppingCart />
  //           </Link>
  //         </Button>
  //       </div>
  //     </div>
  //     <Outlet />
  //   </div>
  // );

  return (
    <div className="h-fit w-[98lvw] overflow-hidden sm:mt-2">
      <div className="h-[15%] space-y-2 border-b-2 p-4 sm:space-y-4">
        {/* NAV --- 1 */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              className="block md:hidden"
              onClick={() => handleIsOpen(true)}
            >
              <HiMenu className="text-2xl" />
            </button>
            <Link to={'/all-products'} className="block">
              <h1 className="main-font text-lg font-semibold sm:text-[24px]">
                Fashion Shoppie
              </h1>
            </Link>
          </div>
          <div className="relative flex items-center">
            {cartQuantity !== 0 && (
              <span className="title-font absolute right-[4px] top-0 text-stone-50">
                {cartQuantity}
              </span>
            )}
            <Button variant="primary" extraStyles="text-[20px]">
              <Link to="/cart">
                <HiShoppingCart />
              </Link>
            </Button>
          </div>
        </div>

        {/* NAV --- 2 */}
        <div className="flex w-[100%] justify-between gap-4">
          <div className="flex w-full gap-4 md:w-auto md:gap-7">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              extraStyles="w-full md:w-auto"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <Button
            variant="iconButton"
            onClick={() => setIsAscending(!isAscending)}
          >
            {isAscending ? (
              <HiOutlineSortAscending />
            ) : (
              <HiOutlineSortDescending />
            )}
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
export default AppLayout;
