import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 sm:px-16 md:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Summarize Articles with{' '}
          <br className="hidden md:inline" />
          <span className="text-yellow-400 animate-bounce">Blog-Ai</span>
        </h1>
        <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium opacity-90">
          Welcome to Blog-Ai! Explore insightful articles, stay updated with the latest trends, and create your own blog posts effortlessly.
        </h2>
        <div className="mt-10">
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
