import ProductList from './components/ProductList'; 
import Materials from './components/Materials'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          My Product Store
        </h1>
        <ProductList />
        <div className='mt-4'>
        <Materials />
        </div>
      </div>
    </div>
  );
}

export default App;
