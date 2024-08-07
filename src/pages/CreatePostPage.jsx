import "../styles/CreatePostPage.css";

function CreatePostPage() {
  return (
    <div className="createpost-container">
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
        <form className="grid gap-4">
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
                placeholder="e.g. React.js Development"
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
                rows="4"
                placeholder="Describe your services..."
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
                  placeholder="e.g. $50 /hr"
                  type="number"
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
            <button
              type="submit"
              className="submit-button"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePostPage;

