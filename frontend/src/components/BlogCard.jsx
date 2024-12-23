import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS for toast styling

const BlogCard = ({ title, content, summary, postId, onDelete }) => {
  const navigate = useNavigate();

  // For Edit Post
  const handleEdit = () => {
    navigate(`/edit/${postId}`);
  };

  // For Delete Post
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      try {
        await axios.delete(`/api/posts/${postId}`);
        toast.success('Post deleted');
        onDelete(postId); // Call the callback function to update parent state
      } catch (error) {
        console.error('Error deleting the post:', error);
        alert('Failed to delete the post. Please try again.');
      }
    }
  };

  // Read More Button
  const handleReadMore = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl shadow-blue-500/20 ">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center"> <span className='font-semibold text-2xl text-black'>Title :</span>  {title}</h3>
        <p className="text-black text-base mb-4 text-center "><span className='font-semibold  text-2xl text-yellow-400'>Summary</span>
        <br/> "{summary}"
         </p>
        <p className="text-black text-sm text-center "><span className='font-semibold text-2xl text-yellow-400'>Content</span> <br/>
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
          className="mt-4 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
