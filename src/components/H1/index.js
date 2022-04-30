import React from "../../react.js";
import style from "./style.js";

const H1 = ({ count }) => {
    return React.createElement( 
        'h1', 
        { style }, 
        [{ type: 'text', props: { nodeValue: `${ count }`, children: [] } }] 
    )
};

export default H1;

