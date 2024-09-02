import  { useContext } from 'react';
import { ProductContext } from './ProductStore'; 

function Materials() {
  const { products } = useContext(ProductContext); 

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Materials</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available.</p>
      ) : (
        <ul className="list-disc list-inside">
          {products.map((product, index) => (
            <li key={index} className="py-2 px-4 border-b border-gray-200">
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Materials;
