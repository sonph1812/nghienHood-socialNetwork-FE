import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import RightBar from "../../components/rightbar/RightBar";
import Post from "../../components/post/Post";

export function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Post/>
\                <RightBar/>
            </div>
        </>
    );
};