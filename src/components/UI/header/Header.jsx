import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/context";
import faris from "./354b5c040cac37946b68031e849de96a16ecc619_full.jpg";

function Header({ headerLinks }) {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("account");
    localStorage.removeItem("accountName");
  };

  return (
    <header>
      <div className="user">
        <img className="user__logo" src={faris} alt="faris" />
        <p className="user__name">{localStorage["accountName"]}</p>
      </div>
      <nav>
        <ul className="navList">
          {headerLinks.map((link) => (
            <li key={link.path} className="navItem">
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MyButton className="exitButton" onClick={logout}>
        Выйти
      </MyButton>
    </header>
  );
}

export default Header;
