import { useContext, useState,useEffect } from "react";
import fetchProducts from "../lib/api/products";
import searchContext from "../store/SearchContext";
import ProductCard from "../components/common/ProductCard.jsx"
const Search = ({ item }) => {
  const [products, setProducts] = useState([]);
  const {searchValue} = useContext(searchContext);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  const results = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
      <div className="grid justify-center sm:justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
};
export default Search;
