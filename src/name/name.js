import React from "react";
import "./name.css";
import govlogo from "./gov.png";
const Name = () => {
    return (
        <div className="namebar">
            <div className="logo">
                <img src={govlogo}/>
            </div>
            <div className="topic">
                <h2 className="projname">HYDROAIR PURO</h2>
                <h2 className="projdesc">WATER AND AIR QUALITY MONITORING PORTAL</h2>
            </div>

        </div>
    )
}
export default Name;