import { useState, useContext } from "react";
import { createPost } from "../../api/api"; 
import { AuthContext } from "../../context/AuthContext"; 
import "./Posts.css"

const CreatePost = () => {
    const { token } = useContext(AuthContext);
    const [formData, setFormData] = useState({ title: "", content: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(formData, token);
            alert("Post created!");
        } catch (error) {
            alert(error.response?.data?.error || "Failed to create post.");
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" onChange={handleChange} />
                <textarea name="content" placeholder="Content" onChange={handleChange}></textarea>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePost;
