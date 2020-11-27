import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PagesSharpIcon from '@material-ui/icons/PagesSharp';
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="app">
                    <h1>Apprentices</h1>
                </div>
                

                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" /> 
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontsize="large"/>
                </div>
                <div className="header__option">
                    <PagesSharpIcon fontsize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>Angelo Lucas</h4>
                </div>
                <div className="icons">
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                </div>
            </div>
        
        </div>
    )
}

export default Header;
