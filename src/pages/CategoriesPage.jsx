import { useState, useEffect } from "react";
import { categories } from "../lib/data/sampledata.js";
import ProductCard from "../components/common/ProductCard.jsx";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [categorySamples, setCategorySamples] = useState({});
  useEffect(() => {
    const sampleMap = {};
    categories.forEach(({ slug, products }) => {
      sampleMap[slug] = products.slice(0, 3);
    });
    setCategorySamples(sampleMap);
  }, []);

  return (
    <div className="p-4">
      {categories.map(({ title, slug }) => (
        <div key={slug} className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              <span>{title}</span>
            </h1>
            <button className="group rounded-lg bg-white border border-blue-500 hover:bg-blue-50 transition-colors duration-200 px-4 py-2">
              <Link
                to={`/categories/${slug}`}
                className="text-blue-600 hover:text-blue-700 text-lg font-medium flex items-center gap-2"
              >
                <span>View more</span>
                <FaSquareArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-4">
            {categorySamples[slug]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) || <p>Loading...</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
