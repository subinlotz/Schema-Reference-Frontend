import { useState, useEffect } from "react";
import { getPosts } from "../../api/api"; 
import "./Posts.css"

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await getPosts();
                setPosts(data);
            } catch (error) {
                alert("Error fetching posts.");
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="container post-list">
        <h2>All Posts</h2>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>By {post.user?.name || "Unknown"}</small>
            </div>
          ))
        )}
      </div>
    );
};

export default Posts;
