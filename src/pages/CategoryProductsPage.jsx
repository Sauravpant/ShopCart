import { useParams, useNavigate } from "react-router-dom";
import fetchProductsByCategory from "../lib/api/categoryproducts";
import ProductCard from "../components/common/ProductCard";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const CategoryProductsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCategory(slug);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (error) {
      navigate("/404");
    }
  }, [error, navigate]);

  return (
    <>
      {loading && <Loading />}
      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold capitalize mb-6">
          {slug.replace(/-/g, " ")}
        </h1>
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
    </>
  );
};

export default CategoryProductsPage;
