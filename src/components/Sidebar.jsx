import React from "react";
import './css/Props.css';
import { SidebarData } from "./SidebarData";

const Sidebar = () =>{
    return(
        <>
            <div className="side-bar">
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return ( 

                            <li 
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            key={key} onClick={() => {window.location.pathname = val.link}}
                            >
                                
                                <div id="icon">{val.icon}</div>
                                <div id="title">
                                    {val.title}
                                </div>
                            </li>      
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar;