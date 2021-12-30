import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__left">
          <a href="https://about.google/">About</a>
          <a href="https://store.google.com/">Store</a>
        </div>
        <div className="home__header__right">
          <a href="https://mail.google.com/">Gmail</a>
          <a href="https://www.google.com/imghp?hl=en">Images</a>
          <AppIcon />
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I5CA-z_C2yzJ3pFQbcD-pa6sMkbIRQf21ZrDXSe=s192-c-mo" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://cdn.neow.in/news/images/uploaded/2015/09/google-logo-2015-dark-white_story.jpg"
          alt="Company Logo"
        />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
