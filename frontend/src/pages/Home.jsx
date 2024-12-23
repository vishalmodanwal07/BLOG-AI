// Frontend: Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from "../components/BlogCard";
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS for toast styling



function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        const { data, success } = response.data;

        if (success && Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Expected data to be an array, but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = (deletedPostId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== deletedPostId));
    
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full bg-white p-8 rounded-xl shadow-2xl mb-8 max-w-full lg:max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 animate-pulse">Blog Posts</h1>

        {loading ? (
          <Spinner/>
        ) : posts.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">No posts available.</p>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                postId={post._id}
                title={post.title}
                content={post.content}
                summary={post.summary}
                onDelete={handleDeletePost} 
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link
            to="/create"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
          >
            Create New Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
