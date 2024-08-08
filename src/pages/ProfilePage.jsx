import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <>
      <div className="profile-container">
        <div className="grid-layout">
          <div>
            <h2 className="profile-title">Customer Profile</h2>
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
                  <label className="profile-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="profile-input"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="profile-input"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="profile-input"
                    id="password"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="profile-actions">
                <button className="profile-button save-button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="profile-title">Programmer Profile</h2>
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
                  <label className="profile-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="profile-input"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="profile-input"
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="profile-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="profile-input"
                    id="password"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="profile-posts">
                <h3 className="posts-title">My Posts</h3>
                <div className="posts-grid">
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 1</h4>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 2</h4>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                  <div className="post-card" data-v0-t="card">
                    <h4 className="post-title">Post Title 3</h4>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="post-actions">
                      <button className="post-button view-button">View</button>
                      <button className="post-button edit-button">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-skills">
                <h3 className="skills-title">Skills</h3>
                <div className="skills-grid">
                  <div>
                    <label className="profile-label" htmlFor="skill1">
                      Skill 1
                    </label>
                    <input
                      className="profile-input"
                      id="skill1"
                      type="text"
                      placeholder="JavaScript"
                    />
                  </div>
                  <div>
                    <label className="profile-label" htmlFor="skill2">
                      Skill 2
                    </label>
                    <input
                      className="profile-input"
                      id="skill2"
                      type="text"
                      placeholder="React"
                    />
                  </div>
                  <div>
                    <label className="profile-label" htmlFor="skill3">
                      Skill 3
                    </label>
                    <input
                      className="profile-input"
                      id="skill3"
                      type="text"
                      placeholder="Node.js"
                    />
                  </div>
                  <div>
                    <label className="profile-label" htmlFor="skill4">
                      Skill 4
                    </label>
                    <input
                      className="profile-input"
                      id="skill4"
                      type="text"
                      placeholder="TypeScript"
                    />
                  </div>
                </div>
              </div>
              <div className="profile-description">
                <h3 className="description-title">Description</h3>
                <textarea
                  className="description-input"
                  id="description"
                  placeholder="Tell us about yourself"
                >
                </textarea>
              </div>
              <button className="profile-button save-button-programmer">
                  Save Changes
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
