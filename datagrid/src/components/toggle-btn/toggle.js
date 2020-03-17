import React from "react";

import "./toggle.css";

const ToggleButton = (props) => {
    return (
        <div className="toggle">
            <p>Show only active</p>
            <input type="checkbox" id="buttonThree" onChange={props.showActive}/>
            <label for="buttonThree"> 
                <i></i>
            </label>
        </div>
    )
}

export default ToggleButton;