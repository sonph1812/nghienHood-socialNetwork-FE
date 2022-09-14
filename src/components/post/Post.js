import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import React from 'react';


export default function Post({ post }) {
    const [like,setLike] = useState()
    const [isLiked,setIsLiked] = useState(false)
    const Users ="a"

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                        />
                        <span className="postUsername">

            </span>
                        <span className="postDate"></span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"></span>
                    <img className="postImg"  />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon"  onClick={likeHandler} />
                        <img className="likeIcon"  onClick={likeHandler}  />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
