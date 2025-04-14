import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { FiShoppingBag } from "react-icons/fi";
import useCart from "../../features/cart/cartHooks";
import { useAuth } from "../../features/auth/authHooks";
import { useState ,useEffect} from "react";
const SampleProductCard = ({ product }) => {
  const [popup, setPopup] = useState(false);
  const { handleAddToCart } = useCart();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const handleAddClick = () => {
    if (auth.user) {
      handleAddToCart(product);
    } else {
      navigate("/auth/login");
    }
  };
  useEffect(() => {
    if (popup) {
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  }, [popup]);
  return (
    <>
      {popup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Item added to cart successfully.
          </Alert>
        </div>
      )}
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
            <h3 className="font-medium text-gray-900 text-lg line-clamp-1">
              {product.name}
            </h3>
            <span className="bg-gray-300 text-black text-xs px-2 py-1 rounded-full">
              {product.rating}/5
            </span>
          </div>

          <p className="text-gray-500 text-sm line-clamp-2">
            {product.description}
          </p>

          <span className="block font-bold text-gray-900 text-lg">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddClick}
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors hover:cursor-pointer"
          >
            {popup && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Item added to cart successfully.
              </Alert>
            )}
            <FiShoppingBag className="w-4 h-4" />
            <span className="hover:cursor-pointer">Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default SampleProductCard;
