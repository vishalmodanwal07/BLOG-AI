import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageCard from '../components/PostCard';
import { toast } from 'react-toastify';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/posts/${id}`);
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Post not found or failed to fetch');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      navigate('/'); 
      toast.success("Post Deleted");
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <PageCard
      title={post.title}
      content={post.content}
      onEdit={handleEdit}
      onDelete={handleDelete}
      loading={loading}
      error={error}
    />
  );
}

export default PostPage;
