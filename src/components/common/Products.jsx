import { useEffect, useState } from "react";
import fetchProducts from "../../lib/api/products";
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/Loading";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/filters/productSlice.js";
import useProduct from "../../features/filters/productHooks.js";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.items);
  const {
    sortingByPriceHighTolow,
    sortingByPriceLowToHigh,
    sortingByRating,
    sortingByTitle,
  } = useProduct();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data.products));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [dispatch]);

  useEffect(() => {
    if (error) navigate("/404");
  }, [error, navigate]);

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "priceLow") sortingByPriceLowToHigh();
    if (value === "priceHigh") sortingByPriceHighTolow();
    if (value === "rating") sortingByRating();
    if (value === "title") sortingByTitle();
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-800 text-center">
        Our Products
      </h1>
      <div className="flex justify-end mb-10">
        <div className="relative group w-56">
          <select
            onChange={handleSort}
            className="w-full px-5 py-3 appearance-none bg-white border-0 rounded-xl shadow-lg text-gray-700 font-medium focus:outline-none focus:ring-2 
             focus:ring-purple-500 cursor-pointer pr-10 transition-all duration-200 hover:shadow-xl"
          >
            <option
              value=""
              disabled
              selected
              className="text-gray-400"
            >
              Sort by...
            </option>
            <option value="priceLow" className="text-gray-800">
              Price: Low to High
            </option>
            <option value="priceHigh" className="text-gray-800 ">
              Price: High to Low
            </option>
            <option value="rating" className="text-gray-800 ">
              Top Rated
            </option>
            <option value="title" className="text-gray-800 ">
              Alphabetical
            </option>
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-purple-600 group-hover:text-purple-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
