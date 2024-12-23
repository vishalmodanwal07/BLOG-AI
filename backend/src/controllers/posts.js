import Post from "../models/post.js";
import { generateSummary } from "../utils/ai.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponce.js";

//endpoints -->
//1. for gets all post-->
const getPosts = asyncHandler(async(req , res)=> {
    try {
        const posts = await Post.find();
        return res
        .status(200)
        .json(new ApiResponse(200 , posts , "all posts" ))
    } catch (error) {
        throw new ApiError(404, error?.message || "failed to load post")
    }
});

//2. for create post

const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  try {
    const summary = await generateSummary(content);
    if (!summary) {
      throw new ApiError(500, "Failed to generate summary");
    }
    const newPost = await Post.create({ title, content, summary });

    return res.status(201).json(new ApiResponse(200, newPost, "New post created"));
  } catch (error) {
    throw new ApiError(409, error?.message || "Failed to create post");
  }
});

//3. for Update post-->

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    
    const summary = await generateSummary(content);
    
    if (!summary) {
      throw new ApiError(500, "Failed to generate summary");
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, summary },
      { new: true }
    );

    return res.status(200).json(new ApiResponse(200, updatedPost, "Post updated"));
  } catch (error) {
    throw new ApiError(409, error?.message || "Failed to update post");
  }
});


//4. for delete post-->

//4. for delete post-->

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
  

const getPost = asyncHandler(async(req , res)=>{
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export {
    getPosts,
    createPost,
    updatePost,
    deletePost, 
    getPost
}