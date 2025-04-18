import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import useCart from '../features/cart/cartHooks.js'; // Your existing hook
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {
    items,
    totalPrice,
    totalProducts,
    handleRemoveFromCart,
    handleDecrementQuantity,
    handleAddToCart,
    handleClearCart
  } = useCart();

  // Calculate totals
  const tax = totalPrice * 0.1; // 10% tax
  const shipping = totalPrice > 50 ? 0 : 5.99; // Free shipping over $50
  const grandTotal = totalPrice + tax + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
            <FiShoppingCart className="mr-2" /> Your Cart ({totalProducts})
          </h1>
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            Continue Shopping <FiChevronRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">Your cart is empty</p>
                  <Link 
                    to="/" 
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.name}`} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                          <img
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover"
                            src={item.image || item.images[0]}
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{item.title || item.name}</h3>
                              <p className="text-sm text-gray-500">Item #{item.id}</p>
                            </div>
                            <button 
                              onClick={() => handleRemoveFromCart(item)}
                              className="text-gray-400 hover:text-red-500 h-6"
                              aria-label="Remove item"
                            >
                              <FiTrash2 />
                            </button>
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleDecrementQuantity(item)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                aria-label="Decrease quantity"
                              >
                                <FiMinus size={14} />
                              </button>
                              <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => handleAddToCart(item)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                aria-label="Increase quantity"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>

                            <div className="text-lg font-semibold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleClearCart}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center cursor-pointer"
                >
                  <FiTrash2 className="mr-1" /> Clear Entire Cart
                </button>
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg p-6 sticky top-4">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({totalProducts} items)</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  Proceed to Checkout
                </button>

                <p className="mt-4 text-center text-sm text-gray-500">
                  or{' '}
                  <Link to="/" className="text-blue-600 hover:text-blue-800">
                    continue shopping
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;