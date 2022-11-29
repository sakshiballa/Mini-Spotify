import React from "react";
import "../Styles/LeftMenu.css";
import{FaSpotify, FaEllipsisH } from "react-icons/fa";
import{BiSearchAlt} from "react-icons/bi";
import{MenuList} from "./MenuList";
import{Menu} from "./Menu";
import { MenuPlaylist } from "./MenuPlaylist";
import  TrackList  from "./TrackList";

function LeftMenu() {
  return(
   <div className="leftMenu">
        <div className="logoContainer">
            <div className="logo">
            <i><FaSpotify/></i>
            <h2>Spotify</h2>
            </div>
            <i>
                <FaEllipsisH />
            </i>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search..'/>
            <i>
            <BiSearchAlt />
            </i>
        </div>
            <Menu title={"Menu"} listObject={MenuList} />
            <MenuPlaylist />
            <TrackList />
        </div>
  );
}

export  {LeftMenu};
