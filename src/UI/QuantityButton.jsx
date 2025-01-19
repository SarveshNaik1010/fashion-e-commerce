import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../slices/cartSlice';
import Button from './Button';

function QuantityButton({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(decreaseItemQuantity(id));
        }}
      >
        -
      </Button>
      <span className="title-font">{currentQuantity}</span>
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityButton;
