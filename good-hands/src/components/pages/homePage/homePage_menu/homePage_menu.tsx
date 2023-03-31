import MenuButton from "./menuButton/menuButton";
import Account from "../../../../img/UserAccount.svg";
import Cart from "../../../../img/ShoppingCart.svg";
import Favourites from "../../../../img/Favourites.svg";
import NewPost from "../../../../img/NewPost.svg";
import Chat from "../../../../img/Chat.svg";
import React from "react";

const LinkMenu = () => {
  return (
    <ul>
      <li className="home-menu_element">
        <MenuButton name={"Account"} src={Account} />
      </li>
      <li className="home-menu_element">
        <MenuButton name={"Cart"} src={Cart} />
      </li>
      <li className="home-menu_element">
        <MenuButton name={"Favourites"} src={Favourites} />
      </li>
      <li className="home-menu_element">
        <MenuButton name={"NewPost"} src={NewPost} />
      </li>
      <li className="home-menu_element">
        <MenuButton name={"Chat"} src={Chat} />
      </li>
    </ul>
  );
};

const Advertisement = () => {
  return <div className="home-menu_ad"></div>;
};

const HomePage_menu = () => {
  return (
    <div className="home-menu">
      <LinkMenu />
      <Advertisement />
    </div>
  );
};

export default HomePage_menu;
