import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PagesSharpIcon from '@material-ui/icons/PagesSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85" title="Terry Jeffords"/>
            <SidebarRow Icon={PagesSharpIcon} title='Páginas'/>
            <SidebarRow Icon={EmojiPeopleSharpIcon} title="Conexões"/>
            <SidebarRow Icon={ChatBubbleOutlineIcon} title="Chat"/>
        </div>
    )
}

export default Sidebar
