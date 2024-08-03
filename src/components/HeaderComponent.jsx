import { Link } from "react-router-dom"
import "../components/ComponentCSS/HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
    <h1 className="title"><a className="title" href="/">ProgramMe</a></h1>
    <nav>
      <ul className="link-list">
          <li><Link className="link" to="/">Home</Link></li>
          {/* <li><Link className="link" to="/blog">Blog</Link></li>
          <li><Link className="link" to="/movies">Movies</Link></li>
          <li><Link className="link" to="/courses">Courses</Link></li> */}
      </ul>
    </nav>
</header>
  )
}

export default HeaderComponent