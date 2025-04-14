import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, decrementQuantity, clearCart } from "./cartSlice"

const useCart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity(product));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const totalProducts = items.reduce((acc, item) => acc + item.quantity, 0);

  return { handleAddToCart, handleRemoveFromCart, handleDecrementQuantity, handleClearCart, totalPrice, totalProducts };
}
export default useCart;