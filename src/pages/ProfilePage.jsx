import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <>
      <div className="profile-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
          <div>
            <h2 class="text-2xl text-[#b4e6f4] font-bold mb-6">Customer Profile</h2>
            <div
              class="square-lg border bg-card text-card-foreground shadow-sm p-6"
              data-v0-t="card"
            >
              <div class="flex items-center space-x-4 mb-6">
                <span class="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                  <img
                    class="aspect-square h-full w-full"
                    alt="Customer Avatar"
                    src="src/assets/spooderman.png"
                  />
                </span>
                <div>
                  <h3 class="text-lg font-semibold">John Doe</h3>
                  <p class="text-muted-foreground">Customer</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="phone"
                  >
                    Phone
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    type="tel"
                    value="+1 (555) 555-5555"
                  />
                </div>
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    type="email"
                    value="john@example.com"
                  />
                </div>
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    type="password"
                    value="********"
                  />
                </div>
              </div>
              <div class="mt-6 flex justify-end">
                <button class="inline-flex items-center justify-center whitespace-nowrap square-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-2xl text-[#b4e6f4] font-bold mb-6">Programmer Profile</h2>
            <div
              class="square-lg border bg-card text-card-foreground shadow-sm p-6"
              data-v0-t="card"
            >
              <div class="flex items-center space-x-4 mb-6">
                <span class="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                  <img
                    class="aspect-square h-full w-full"
                    alt="Programmer Avatar"
                    src="src/assets/spooderman.png"
                  />
                </span>
                <div>
                  <h3 class="text-lg font-semibold">Jane Doe</h3>
                  <p class="text-muted-foreground">Programmer</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="phone"
                  >
                    Phone
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    type="tel"
                    value="+1 (555) 555-5555"
                  />
                </div>
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    type="email"
                    value="jane@example.com"
                  />
                </div>
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    type="password"
                    value="********"
                  />
                </div>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-semibold mb-4">My Posts</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div
                    class="square-lg border bg-card text-card-foreground shadow-sm p-4"
                    data-v0-t="card"
                  >
                    <h4 class="text-lg font-semibold mb-2">Post Title 1</h4>
                    <p class="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div class="flex justify-end">
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3">
                        View
                      </button>
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3 ml-2">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div
                    class="square-lg border bg-card text-card-foreground shadow-sm p-4"
                    data-v0-t="card"
                  >
                    <h4 class="text-lg font-semibold mb-2">Post Title 2</h4>
                    <p class="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div class="flex justify-end">
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3">
                        View
                      </button>
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3 ml-2">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div
                    class="square-lg border bg-card text-card-foreground shadow-sm p-4"
                    data-v0-t="card"
                  >
                    <h4 class="text-lg font-semibold mb-2">Post Title 3</h4>
                    <p class="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div class="flex justify-end">
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3">
                        View
                      </button>
                      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 square-md px-3 ml-2">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-semibold mb-4">Skills</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="skill1"
                    >
                      Skill 1
                    </label>
                    <input
                      class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="skill1"
                      type="text"
                      value="JavaScript"
                    />
                  </div>
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="skill2"
                    >
                      Skill 2
                    </label>
                    <input
                      class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="skill2"
                      type="text"
                      value="React"
                    />
                  </div>
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="skill3"
                    >
                      Skill 3
                    </label>
                    <input
                      class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="skill3"
                      type="text"
                      value="Node.js"
                    />
                  </div>
                  <div>
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="skill4"
                    >
                      Skill 4
                    </label>
                    <input
                      class="flex h-10 w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="skill4"
                      type="text"
                      value="TypeScript"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-semibold mb-4">Description</h3>
                <textarea
                  class="flex min-h-[80px] w-full square-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="description"
                >
                  I am a skilled full-stack developer with expertise in J
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
