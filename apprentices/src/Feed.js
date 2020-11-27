import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post
                profilePic="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85"
                message="Wow"
                timestamp="Time"
                username="Terry Crews"
                image="https://img.freepik.com/fotos-gratis/paisagem-com-silhueta-de-arvore-antiga-contra-um-ceu-vermelho-ao-luar_1048-11611.jpg?size=626&ext=jpg"
            />

            <Post
                profilePic="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85"
                message="Wow"
                timestamp="Time"
                username="Terry Crews"
            />
        </div>
    )
}

export default Feed
