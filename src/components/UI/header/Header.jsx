import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/context";

function Header({ headerLinks }) {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("account");
  };

  return (
    <header>
      <nav>
        <ul className="navList">
          {headerLinks.map((link) => (
            <li key={link.path} className="navItem">
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MyButton
        style={{
          borderRadius: "10px",
          padding: "15px",
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={logout}
      >
        Выйти
      </MyButton>
    </header>
  );
}

export default Header;
