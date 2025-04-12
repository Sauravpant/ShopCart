import ProductCard from "../common/ProductCard";
import shoes from "../../assets/images/shoes.png"
import tshirt from "../../assets/images/tshirt.png"
import headphone from "../../assets/images/headphone.png"
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      description: "Ultra-soft 100% organic cotton with reinforced stitching for everyday comfort",
      price: 24.99,
      rating: 4.5,
      image: tshirt
    },
    {
      id: 2,
      name: "Running Shoes",
      description: "Lightweight performance runners with responsive foam and breathable knit upper",
      price: 89.99,
      rating: 4.8,
      image: shoes
    },
    {
      id: 3,
      name: "Wireless Headphones",
      description: "Premium over-ear headphones with 40hr battery life, crystal-clear calls, and deep bass",
      price: 59.99,
      rating: 4.2,
      image: headphone
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Suggested for you</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;