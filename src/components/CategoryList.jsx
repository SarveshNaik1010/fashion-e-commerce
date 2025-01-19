import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getCategories, getProductsByCategory } from '../product-api';

import Button from '../UI/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function CategoryList({ isOpen, handleIsOpen }) {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (category) => getProductsByCategory(category),
    onSuccess: (newProductData) => {
      queryClient.setQueryData(['products'], newProductData);
    },
  });

  function handleCategory(category) {
    mutate(category);
    handleIsOpen(false);
  }

  return (
    <div
      className={`animate fixed left-0 top-0 ${!isOpen && 'left-[-100%]'} flex h-[100%] w-fit flex-col gap-4 border-r-2 bg-gray-300 transition-all duration-300 md:static md:bg-[#fff00000]`}
    >
      <div className="flex items-center justify-center pr-2">
        <h1 className="title-font flex-grow py-[24px] text-center font-semibold uppercase">
          Categories
        </h1>
        <Button
          variant="iconButton"
          extraStyles="block md:hidden"
          onClick={() => handleIsOpen(false)}
        >
          <MdKeyboardArrowLeft />
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-[24px] px-[24px]">
        {['all products', ...categories].map((category) => {
          return (
            <Button
              variant="secondary"
              onClick={() => handleCategory(category)}
              key={category}
            >
              {category.toUpperCase()}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
