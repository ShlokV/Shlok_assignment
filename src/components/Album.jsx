import { useRef } from 'react';
import { CiCamera } from "react-icons/ci";

const Album = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('hidden');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-600 text-white py-2 relative z-20">
        <div className="container mx-auto flex justify-between items-center px-6 sm:px-12 md:px-24 lg:px-32">
          <div className="flex items-center">
            <CiCamera className='mr-2 text-2xl' />
            <h1 className="text-2xl font-bold">Album</h1>
          </div>
          <button 
            onClick={toggleMenu} 
            className="text-white border rounded-sm border-white p-1 text-xl"
          >
            &#9776;
          </button>
        </div>

        {/* Menu Content */}
        <div 
          ref={menuRef} 
          className="absolute left-0 right-0  bg-gray-600 text-white px-6 py-4 hidden z-10"
        >
          <div className="container mx-auto flex justify-between items-center px-6 sm:px-12 md:px-24 lg:px-32">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-bold">About</h2>
              <p className="mt-2 max-w-md">
                Add some information about the album below, the author, or any other background context. 
                Make it a few sentences long so folks can pick up some informative tidbits. 
                Then, link them off to some social networking sites or contact information.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-bold">Contact</h2>
              <ul className="mt-2">
                <li className="mt-2"><a href="#" className="text-blue-400 underline">Follow on Twitter</a></li>
                <li className="mt-2"><a href="#" className="text-blue-400 underline">Like on Facebook</a></li>
                <li className="mt-2"><a href="#" className="text-blue-400 underline">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-28 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-thin ">Album example</h2>
          <p className="text-gray-500 font-extralight text-[18px] mt-4 max-w-xl mx-auto">
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded mr-2">Main call to action</button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded">Secondary action</button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(9).fill(0).map((_, idx) => (
            <div key={idx} className="bg-white  shadow-lg rounded-md overflow-hidden">
              <div className="bg-gray-600 h-48 flex items-center justify-center">
                <span className="text-white">Thumbnail</span>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <div className="flex items-center">
                  <button className="text-gray-500 border p-1 border-gray-500 rounded-l-sm">View</button>
                  <button className="text-gray-500 border p-1 border-gray-500 rounded-r-sm">Edit</button>
                </div>
                <p className="text-gray-500 text-sm text-right mt-2">9 mins</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-16">
        <div className="container mx-auto flex justify-between items-center px-6 sm:px-12 md:px-24 lg:px-32">
          <div>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p className="mt-2">
              New to Bootstrap? <a href="#" className="text-blue-400">Visit the homepage</a> or read our <a href="#" className="text-blue-400">getting started guide</a>.
            </p>
          </div>
          <a href="#" className="text-blue-400">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default Album;
