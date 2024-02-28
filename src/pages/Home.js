// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-white">
        <span className="text-blue-500">Q</span>
        <span className="text-green-500">u</span>
        <span className="text-yellow-500">i</span>
        <span className="text-red-500">z</span>
        <span className="text-purple-500">z</span>
        <span className="text-indigo-500">y</span>
      </h1>
      <div className="flex gap-4">
        <a
          href="/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Quiz
        </a>
        <a
          href="/take"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Take Quiz
        </a>
      </div>
    </div>
  );
};

export default Home;
