import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "../helpers/images.jsx";
import Tinder from "../assets/tinder.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          fontSize="large"
          className="header__icon"
          style={{ height: "70px", width: "70px" }}
        />
      </IconButton>
      <Image src={Tinder} className={"header__logo"}></Image>
      <IconButton>
        <ForumIcon
          fontSize="large"
          className="header__icon"
          style={{ height: "70px", width: "70px" }}
        />
      </IconButton>
    </div>
  );
}

export default Header;
