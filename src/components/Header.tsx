import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import searchLogo from "../assets/svg/search.svg";

interface NavItem {
  name: string;
  path: string;
  id: string;
}

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };
  const navItems: NavItem[] = [
    { name: "Niñas", path: "/niñas", id: "girl" },
    { name: "Niños", path: "/niños", id: "boy" },
    { name: "Hogar", path: "/hogar", id: "home" },
    { name: "Fotomurales", path: "/fotomurales", id: "fotomural" },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <p className="logo__p">Decohogar</p>
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                id={item.id}
                to={item.path}
                className="nav-link"
                data-text={item.name}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <form className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          className={isSearchOpen ? "search-input block" : "search-input none"}
        />
        <button onClick={handleClick} className="search-button">
          <img
            src={searchLogo}
            width="40px"
            className="search-logo"
            alt="search-logo"
          />
        </button>
      </form>
    </header>
  );
};

export default Header;
