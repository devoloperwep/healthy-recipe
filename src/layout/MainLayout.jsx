import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img
            className="site-logo"
            width={260}
            height={40}
            src="./src/assets/images/logo.svg"
          />
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
                <span className="active-style"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
                <span className="active-style"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recipes">
                Recipes
                <span className="active-style"></span>
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-recipes">Browse recipes</button>
          <img
            onClick={() => setMenu(!menu)}
            className="menu-img hidden"
            width={18}
            height={16}
            src="../src/assets/images/icon-hamburger-menu.svg"
            alt=""
          />
        </nav>
        {menu && (
          <nav className="hide-nav">
            <ul className="hide-list">
              <li className="hide-item">
                <NavLink className="nav-link hide-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="hide-item">
                <NavLink className="nav-link hide-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hide-link" to="/recipes">
                  Recipes
                </NavLink>
              </li>
            </ul>
            <button className="btn hide-btn">Browse recipes</button>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <p>Made with ❤️ and 🥑</p>
            <div className="footer-icons">
              <img
                width={22}
                height={22}
                src="../src/assets/images/icon-instagram.svg"
                alt=""
              />
              <img
                width={22}
                height={22}
                src="../src/assets/images/icon-bluesky.svg"
                alt=""
              />
              <img
                width={22}
                height={22}
                src="../src/assets/images/icon-tiktok.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
