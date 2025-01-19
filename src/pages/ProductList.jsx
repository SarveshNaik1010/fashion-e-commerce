import CategoryList from '../components/CategoryList';
import SearchProducts from '../components/SearchProducts';

function ProductList({ isAscending, setIsAscending, isOpen, handleIsOpen }) {
  return (
    <div className="flex h-fit w-[100lvw]">
      <CategoryList isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <SearchProducts
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />
    </div>
  );
}

export default ProductList;
