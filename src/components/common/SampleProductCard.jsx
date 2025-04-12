import { FiShoppingBag } from 'react-icons/fi';

const SampleProductCard = ({ product }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="relative aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
      />
    </div>
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-gray-900 text-lg line-clamp-1">{product.name}</h3>
        <span className="bg-gray-300 text-black text-xs px-2 py-1 rounded-full">
          {product.rating}/5
        </span>
      </div>

      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      
      <span className="block font-bold text-gray-900 text-lg">${product.price.toFixed(2)}</span>
      
      <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors hover:cursor-pointer">
        <FiShoppingBag className="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
);
export default SampleProductCard;