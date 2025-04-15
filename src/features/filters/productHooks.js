import { sortByPriceLowToHigh, sortByPriceHighToLow, sortByRating, sortByTitle } from "./productSLice";
import { useDispatch } from "react-redux";

const useProduct = () => {
  const dispatch = useDispatch();

  const sortingByPriceHighTolow = () => {
    dispatch(sortByPriceHighToLow());
  }

  const sortingByPriceLowToHigh = () => {
    dispatch(sortByPriceLowToHigh());
  }

  const sortingByRating = () => {
    dispatch(sortByRating());
  }

  const sortingByTitle = () => {
    dispatch(sortByTitle());
  }

  return { sortingByPriceHighTolow, sortingByPriceLowToHigh, sortingByRating, sortingByTitle };
}
export default useProduct;