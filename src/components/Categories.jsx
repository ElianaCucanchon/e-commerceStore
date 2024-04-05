import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonDress, faPerson, faHeart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul>
          <li className="nav-item">
            <Link to={'/category/mujer'} className="nav-link">
              <FontAwesomeIcon icon={faPersonDress} /> Mujer
              <span className="badge bg-secondary"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/category/hombre'} className="nav-link">
              <FontAwesomeIcon icon={faPerson} /> Hombre
              <span className="badge bg-secondary"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/category/rebajas'} className="nav-link">
              <FontAwesomeIcon icon={faHeart} /> Rebajas
              <span className="badge bg-secondary"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}


