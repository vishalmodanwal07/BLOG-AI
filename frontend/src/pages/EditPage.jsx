import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS for toast styling


function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);
      setTitle(data.title);
      setContent(data.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/posts/${id}`, { title, content });
    toast.success("Post Updated");
    navigate('/');
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div>
            <label htmlFor="content" className="block text-xl font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
              placeholder="Edit your post content here"
              rows="6"
              required
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
            >
              Update Post
            </button>
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

export default EditPage;
