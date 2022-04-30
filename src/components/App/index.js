import React from "../../react.js";
import style from "./style.js";
import H1 from "../H1/index.js";
import Button from "../Button/index.js";

const App = props => {
    const [ state, setState ] = React.useState( 0 );
    const handlerClick = () => setState( current => current + 1 );
    return React.createElement( 
        'main', 
        { className: 'app', style }, 
        [ H1({ count: state }), Button({ onClick: handlerClick }) ]
    )
};

export default App;

