import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogCard = ({ title, content, summary, postId }) => {
  const navigate = useNavigate();

  // Handle edit post
  const handleEdit = () => {
    navigate(`/edit/${postId}`); // Navigate to the edit page with the post ID
  };

  // Handle delete post
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      try {
        await axios.delete(`/api/posts/${postId}`); // Call the API to delete the post
        alert('Post deleted successfully!');
        window.location.reload(); // Refresh the page after deletion
      } catch (error) {
        console.error('Error deleting the post:', error);
        alert('Failed to delete the post. Please try again.');
      }
    }
  };

  // Handle read more
  const handleReadMore = () => {
    navigate(`/post/${postId}`); // Navigate to the blog post page
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{summary}</p>
        <p className="text-gray-500 text-sm">
          {content.length > 150 ? content.substring(0, 150) + '...' : content}
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
        <button
          onClick={handleReadMore}
          className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;