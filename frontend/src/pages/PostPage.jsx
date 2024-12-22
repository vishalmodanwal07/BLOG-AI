import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true); // Loading state to manage the loading UI
  const [error, setError] = useState(null); // To handle any potential errors

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/posts/${id}`);
        setPost(data);
        setLoading(false); // Stop loading when data is fetched
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Post not found or failed to fetch');
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      navigate('/'); // Redirect to home after deletion
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  // Show loading state while fetching data
  if (loading) return <p className="text-center text-xl font-medium">Loading...</p>;

  // If there's an error (post not found or failed to fetch)
  if (error) return <p className="text-center text-xl text-red-500 font-medium">{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">{post.title || 'Post Title'}</h1>
        <p className="text-lg text-gray-700 mb-6">{post.content || 'No content available.'}</p>

        <div className="flex justify-between">
          {/* Edit Button */}
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
          >
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-xl shadow-md hover:from-red-600 hover:to-red-800 transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
