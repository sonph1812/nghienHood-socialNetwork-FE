import React from 'react';

import "./online.css";


const Online = () => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername"></span>
        </li>
    );
};

export default Online;