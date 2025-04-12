import { useEffect, useState } from "react";
import fetchProducts from "../../lib/api/products";
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/Loading";
import ProductCard from "./ProductCard.jsx";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
  useEffect(() => {
    if (error) navigate("/404");
  }, [error, navigate]);
  if (loading) return <Loading />;
  return (
    <>
      <div className="grid justify-center sm:justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Products;
