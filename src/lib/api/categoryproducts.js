const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error(`${response.status} Error`)
    } else {
      const data = await response.json();
      return data.products;
    }
  } catch (err) {
    throw err;
  }
}
export default fetchProductsByCategory;