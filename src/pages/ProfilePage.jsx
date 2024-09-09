import "../styles/ProfilePage.css";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [userType, setUserType] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'https://programmeserver-1.onrender.com';

  const [customerData, setCustomerData] = useState({
    number: '',
    email: '',
    password: '',
  });

  const [programmerData, setProgrammerData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    skills: ['', '', '', ''],
    description: '',
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    const storedUserId = localStorage.getItem("userId");
    setUserType(storedUserType);
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    if (userType && userId) {
      const token = localStorage.getItem('token');
      const url = userType === "customer"
        ? `${API_URL}/customers/${userId}`
        : `${API_URL}/programmers/${userId}`;
      
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (userType === "customer") {
          setCustomerData({
            number: data.number || '',
            email: data.email || '',
            password: '', // Leave password empty
          });
        } else if (userType === "programmer") {
          setProgrammerData({
            name: data.name || '',
            number: data.number || '',
            email: data.email || '',
            password: '', // Leave password empty
            skills: data.skills ? data.skills.split(', ') : ['', '', '', ''],
            description: data.description || '',
          });
        }
      })
      .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userType, userId]);

  const handleCustomerChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.id]: e.target.value,
    });
  };

  const handleProgrammerChange = (e, index) => {
    if (e.target.id.startsWith('skill')) {
      const updatedSkills = [...programmerData.skills];
      updatedSkills[index] = e.target.value;
      setProgrammerData({
        ...programmerData,
        skills: updatedSkills,
      });
    } else {
      setProgrammerData({
        ...programmerData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleCustomerSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const updateData = { ...customerData };
  
      // Only include the password in the update if it's not empty
      if (!updateData.password) {
        delete updateData.password;
      }
  
      const response = await fetch(`${API_URL}/customers/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        alert('Customer profile updated successfully');
      } else {
        alert('Failed to update customer profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleProgrammerSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const updateData = { ...programmerData };
  
      // Only include the password in the update if it's not empty
      if (!updateData.password) {
        delete updateData.password;
      }
  
      updateData.skills = programmerData.skills.filter(skill => skill).join(', ');
  
      const response = await fetch(`${API_URL}/programmers/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        alert('Programmer profile updated successfully');
      } else {
        alert('Failed to update programmer profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="profile-container">
      {/* Render Customer Profile if the logged-in user is a Customer */}
      {userType === "customer" && (
        <div className="customer-profile">
          <h2 className="profile-title">Customer Profile</h2>
          <div className="grid-layout">
            <div className="profile-card" data-v0-t="card">
              <div className="profile-header">
                <span className="profile-avatar">
                  <img
                    className="profile-img"
                    alt="Customer Avatar"
                    src="src/assets/spooderman.png"
                  />
                </span>
                <div>
                  <h3 className="profile-name">John Doe</h3>
                  <p className="profile-role">Customer</p>
                </div>
              </div>
              <div className="profile-info-grid">
                <div>
                  <label className="profile-label" htmlFor="phone">Phone</label>
                  <input
                    className="profile-input"
                    id="number"
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                    value={customerData.number}
                    onChange={handleCustomerChange}
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="email">Email</label>
                  <input
                    className="profile-input"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={customerData.email}
                    onChange={handleCustomerChange}
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="password">Password</label>
                  <input
                    className="profile-input"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={customerData.password}
                    onChange={handleCustomerChange}
                  />
                </div>
              </div>
              <div className="profile-actions">
                <button className="profile-button save-button" onClick={handleCustomerSubmit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render Programmer Profile if the logged-in user is a Programmer */}
      {userType === "programmer" && (
        <div className="programmer-profile">
          <h2 className="profile-title">Programmer Profile</h2>
          <div className="grid-layout">
            <div className="profile-card" data-v0-t="card">
              <div className="profile-header">
                <span className="profile-avatar">
                  <img
                    className="profile-img"
                    alt="Programmer Avatar"
                    src="src/assets/spooderman.png"
                  />
                </span>
                <div>
                  <h3 className="profile-name">Jane Doe</h3>
                  <p className="profile-role">Programmer</p>
                </div>
              </div>
              <div className="profile-info-grid">
                <div>
                  <label className="profile-label" htmlFor="phone">Phone</label>
                  <input
                    className="profile-input"
                    id="number"
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                    value={programmerData.number}
                    onChange={handleProgrammerChange}
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="email">Email</label>
                  <input
                    className="profile-input"
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={programmerData.email}
                    onChange={handleProgrammerChange}
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="password">Password</label>
                  <input
                    className="profile-input"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={programmerData.password}
                    onChange={handleProgrammerChange}
                  />
                </div>
              </div>
              <div className="profile-posts">
                <h3 className="posts-title">My Posts</h3>
                <div className="posts-grid">
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 1</h4>
                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 2</h4>
                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 3</h4>
                    <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-skills">
              <h3 className="skills-title">Skills (Separate by Comma)</h3>
                <div className="skills-grid">
                  {programmerData.skills.map((skill, index) => (
                    <div key={index}>
                      {/* <label className="profile-label" htmlFor={`skill${index + 1}`}>
                        Skill {index + 1}
                      </label> */}
                      <input
                        className="profile-input"
                        id={`skill${index + 1}`}
                        type="text"
                        placeholder={`Skill ${index + 1}`}
                        value={skill}
                        onChange={(e) => handleProgrammerChange(e, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="profile-description">
                <h3 className="description-title">Description</h3>
                <textarea
                  className="description-input"
                  id="description"
                  placeholder="Tell us about yourself"
                  value={programmerData.description}
                  onChange={handleProgrammerChange}
                ></textarea>
              </div>
              <button className="profile-button save-button-programmer" onClick={handleProgrammerSubmit}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
