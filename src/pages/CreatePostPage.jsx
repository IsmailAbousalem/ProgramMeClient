import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CreatePostPage.css";

function CreatePostPage() {
  const { id } = useParams(); // Get post ID from URL if present
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [isEditMode, setIsEditMode] = useState(false); // Track if in edit mode
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if form is submitting
  const [successMessage, setSuccessMessage] = useState(""); // Track success message
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'https://programmeserver-1.onrender.com';

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      // Fetch post data if editing
      const fetchPostData = async () => {
        const response = await fetch(`${API_URL}/posts/${id}`);
        console.log('API_URL:', API_URL);  // This should log: 'https://programmeserver-1.onrender.com'
        if (response.ok) {
          const post = await response.json();
          setFormData({
            title: post.title,
            description: post.description,
            price: post.price,
          });
        } else {
          console.error("Failed to fetch post data");
        }
      };
      fetchPostData();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Disable the form submission

    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (userType !== "programmer") {
      console.error("Only programmers can create or edit posts");
      setIsSubmitting(false); // Re-enable the form if submission is not allowed
      return;
    }

    // const API_URL = process.env.REACT_APP_API_URL;

    const url = isEditMode
      ? `https://programmeserver-1.onrender.com/posts/${id}`
      : `https://programmeserver-1.onrender.com/posts`;

    const method = isEditMode ? "PUT" : "POST";

    const postData = {
      title: formData.title,
      description: formData.description,
      price: formData.price,
    };

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setSuccessMessage(
          isEditMode
            ? "Post updated successfully!"
            : "Post created successfully!"
        );
        setTimeout(() => {
          navigate("/"); // Redirect after a short delay
        }, 2000);
      } else {
        console.error("Failed to create/update post");
        setIsSubmitting(false); // Re-enable the form if submission failed
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false); // Re-enable the form if there was an error
    }
  };

  return (
    <div className="createpost-container">
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="square-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            {isEditMode ? "Edit Post" : "Create a Post"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isEditMode
              ? "Edit your programming services post on ProgramMe"
              : "List your programming services on ProgramMe"}
          </p>
        </div>
        <div className="p-6">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="flex h-10 w-full square-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g. React.js Development"
                required
                disabled={isSubmitting} // Disable input when submitting
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="flex min-h-[80px] w-full square-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="Describe your services..."
                required
                disabled={isSubmitting} // Disable input when submitting
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="price"
                >
                  Price /hr
                </label>
                <input
                  className="flex h-12 w-full square-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g. $50 /hr"
                  required
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="images"
                >
                  Images
                </label>
                <input
                  className="flex h-12 w-full square-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  disabled={isSubmitting} // Disable input when submitting
                />
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting} // Disable the button when submitting
            >
              {isEditMode ? "Update Post" : "Post"}
            </button>
          </form>
        </div>
      </div>
      <a href="#">
        <img
          src="https://readme-typing-svg.demolab.com?font=Nova+Square&weight=900&size=50&duration=2500&pause=800&color=CFFDFF&background=000F1F00&center=true&vCenter=true&multiline=true&repeat=false&width=1230&height=150&lines=Sell+yourself...;Who+knows%2C+someone+might+just+buy+it++%F0%9F%91%80"
          alt="Typing SVG"
        />
      </a>
    </div>
  );
}

export default CreatePostPage;
