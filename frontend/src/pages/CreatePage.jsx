import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/posts', { title, content });
    navigate('/');
  };

  // Navigate to the Home page when the Home button is clicked
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl text-blue-700 font-extrabold text-center mb-8">Create Your Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-xl font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
              placeholder="Enter post title"
              required
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label htmlFor="content" className="block text-xl font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
              placeholder="Write your post content here"
              rows="6"
              required
            />
          </div>

          {/* Button Container */}
          <div className="flex justify-between space-x-4">
            {/* Create Post Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
            >
              Create Post
            </button>

            {/* Home Button */}
            <button
              type="button"
              onClick={goHome}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold rounded-xl shadow-md hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out"
            >
              Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
