import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreatePostPage.css";

function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [isPostCreated, setIsPostCreated] = useState(false); // New state for tracking post creation
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (userType !== "programmer") {
      console.error("Only programmers can create posts");
      return;
    }

    const url = "http://localhost:8080/posts";
    const postData = {
      title: formData.title,
      description: formData.description,
      price: formData.price,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Post created successfully:");
        setIsPostCreated(true); // Set the state to true to show the success message
        setTimeout(() => {
          navigate("/"); // Redirect to the homepage after 3 seconds
        }, 3000);
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="createpost-container">
      {isPostCreated && (
        <div className="success-message">Post created successfully!</div>
      )}
      <div className="square-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            Create a Post
          </h3>
          <p className="text-sm text-muted-foreground">
            List your programming services on ProgramMe
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
                  className="flex h-12 w-full square  -md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Post
            </button>
          </form>
        </div>
      </div>
      <a href="https://git.io/typing-svg">
        <img
          src="https://readme-typing-svg.demolab.com?font=Nova+Square&weight=900&size=50&duration=2500&pause=800&color=CFFDFF&background=000F1F00&center=true&vCenter=true&multiline=true&repeat=false&width=1230&height=150&lines=Sell+yourself...;And+who+knows%2C+someone+might+just+buy+it++%F0%9F%91%80"
          alt="Typing SVG"
        />
      </a>
    </div>
  );
}

export default CreatePostPage;
