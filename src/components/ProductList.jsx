import { useContext } from 'react';
import { ProductContext } from './ProductStore'; 

function ProductList() {
  const { products, setProducts } = useContext(ProductContext);

  const addProduct = () => {
    const newProduct = { name: `Product ${products.length + 1}` };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>
      <ul className="list-disc list-inside mb-4">
        {products.map((product, index) => (
          <li key={index} className="py-2 px-4 border-b border-gray-200">
            {product.name}
          </li>
        ))}
      </ul>
      <button
        onClick={addProduct}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
