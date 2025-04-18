import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-4 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          You don't have any orders yet!
        </h1>
        <p className="text-gray-600">
          Start shopping to discover amazing products and deals.
        </p>
      </div>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default Orders;
