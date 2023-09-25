import React, {useState} from "react";
import stules from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = ({}) => {


    return (
        <>
            <div className={stules.navigation}>
                <ul>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to = "/lists">Your Lists</NavLink>
                    <NavLink to ="/profile">Profile</NavLink>
                </ul>
            </div>
        </>

    )
}

export default Navigation

