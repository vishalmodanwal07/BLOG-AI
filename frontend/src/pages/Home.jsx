import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard'; // Assuming the BlogCard component is in the same directory
import Spinner from '../components/Spinner';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Fetch the API response
        const { data, success } = response.data; // Destructure data and success from the response

        // Validate success and data array
        if (success && Array.isArray(data)) {
          setPosts(data); // Set posts state with the data array
        } else {
          console.error('Expected data to be an array, but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full bg-white p-8 rounded-xl shadow-2xl mb-8 max-w-full lg:max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Blog Posts</h1>

        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">No posts available.</p>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                content={post.content}
                summary={post.summary}
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
