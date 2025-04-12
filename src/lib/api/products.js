const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=40&skip=5&sortBy=title");
    if (!response.ok) {
      throw new Error(`${response.status} Error`);
    } else {
      const data = await response.json();
      return data;
    }

  } catch (err) {
    throw err;
  }
};
export default fetchProducts;