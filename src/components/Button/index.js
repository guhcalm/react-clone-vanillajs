import React from "../../react.js";
import style from "./style.js";

const Button = ({ onClick }) => {
    window.addEventListener( 'click', () => {
        onClick()
    });
    return React.createElement( 
        'button', 
        { style }, 
        [{ type: 'text', props: { nodeValue: `Click on Screen to Increment`, children: [] } }] 
    )
};

export default Button;

