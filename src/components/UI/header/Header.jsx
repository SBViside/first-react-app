import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext, LikedContext } from "../../../context/context";
import userImage from "../../../assets/img/userImage.png";

function Header({ headerLinks }) {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const { setLikedPosts } = useContext(LikedContext);

  const logout = () => {
    setIsAuth(false);
    setLikedPosts([]);
    localStorage.removeItem("account");
    localStorage.removeItem("accountName");
    localStorage.removeItem("likedPostsArray");
  };

  return (
    <header>
      <div className="user" onClick={() => navigate("/favorites")}>
        <img className="user__logo" src={userImage} alt="faris" />
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
