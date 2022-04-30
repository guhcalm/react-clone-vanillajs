const UMD = ( global, factory ) => typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.React = {}));

const React = exports => {
    "use strict";

    const effects = []
    const effectsHasChanged = () => {
        effects
    }

    const update = deadline => {
        if ( effectsHasChanged() ) {
            requestIdleCallback( update );
        }
    }; 
    update()

    const useState = () => {};
    const useEffect = () => {};

    return { 
        useState, 
        useEffect 
    }
};

export default UMD( self, React );