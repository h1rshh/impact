import React from 'react';

const Entertainment = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">ENTERTAINMENT UPDATES</h1>
      <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8 p-4">
        <div className="flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-0">
          <div className="overflow-hidden">
            <img
              src="https://news.illinois.edu/files/6367/788544307/208608.jpg"
              alt="Entertainment 1"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="mt-4 font-semibold">Amaan Ali and Ayaan Ali</h3>
          <p className="mt-4 text-center text-gray-700">
            The sitar is a classical string instrument deeply rooted in Indian music, known for its distinctive sound and intricate craftsmanship. Originating in the Indian subcontinent, the sitar gained prominence during the Mughal era and is often associated with the Hindustani classical tradition.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="overflow-hidden">
            <img
              src="https://images.indianexpress.com/2022/12/J3A0298-2_2.jpg"
              alt="Entertainment 2"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="mt-4 font-semibold">Amaan Ali and Ayaan Ali</h3>
          <p className="mt-4 text-center text-gray-700">
            The sitar is a classical string instrument deeply rooted in Indian music, known for its distinctive sound and intricate craftsmanship. Originating in the Indian subcontinent, the sitar gained prominence during the Mughal era and is often associated with the Hindustani classical tradition.
          </p>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
