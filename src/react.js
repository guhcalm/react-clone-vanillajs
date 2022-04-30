import App from "./components/App/index.js";
const UMD = ( global, factory ) => typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.React = {}));

const React = exports => {
    "use strict";
    
    const current = { state: [], fiber: {} };
    const virtual = { state: [], fiber: {} };
    const stateHasChanged = () => current.state !== JSON.stringify( virtual.state )
    let globalIndex = 0;
    
    const createElement = ( type, props, children = [] ) => ({ type, props: { ...props, children }});
    const createRoot = rootDom => ({ 
        render: element => {
            const rootElement = { dom: rootDom, props: { children: [ element ] }}
            virtual.fiber = rootElement;
        }
    });
    const createDOM = element => {
        const { type, props } = element;
        const dom = type === 'text' ? document.createTextNode('') : document.createElement( type );
        const isListener = name => name.startsWith("on");
        for ( const prop in props ) { 
            if ( prop !== 'children' ) { dom[ prop ] = props[ prop ] }
        };
        return dom
    };

    // criar um fiber para cada elemento da tree
    const render = ( fiber ) => {
        // add dom element to the fiber
        if ( !fiber.dom ) fiber.dom = createDOM( fiber );
        // add parent fiber
        for ( const child of fiber.props.children ) {
            child.parent = fiber;
            render( child );
        }
    }
    const renderDOM = fiber => {
        const { dom, parent, props } = fiber;
        parent.dom.appendChild( dom )
        for ( const child of props.children ) { renderDOM( child ) }
    }
    const commit = () => {  
        if ( document.querySelector( '.app' ) ) document.querySelector( '.app' ).remove();
        renderDOM( current.fiber.props.children[0] );
    }
    function update () {
        globalIndex = 0;
        if ( stateHasChanged() ) {
            createRoot( root ).render( App() );

            render( virtual.fiber );
            current.state = JSON.stringify(virtual.state);
            current.fiber = { ...virtual.fiber };
            delete virtual.fiber;
            delete virtual.hooks;
        } else {
            commit();
            
        };
        requestIdleCallback( update );
    };
    requestIdleCallback( update );

    /**
    * useState Hook
    * @param { any } initial - initial state injeted
    * @return { state, setState } - retun the currentState, and a Function to Sett changes to this state
    */
    const useState = initial => {
        const index = globalIndex;
        let state = virtual.state[ index ];
        if ( state === undefined ) {state = initial };
        const setState = callback => {
            typeof callback === 'function' ? state = callback( state ) : state = callback;
            virtual.state[ index ] = state;
            requestIdleCallback( update );
        }
        virtual.state[ index ] = state;
        globalIndex++;
        return [ state, setState ]
    };
    /** 
     * useEffect Hook
     * @param { function } callback
     * @param { array } dependencies
    */
    const useEffect = ( callback, dependencies ) => {
        const index = globalIndex;
        globalIndex++;
        const hasChanged = dependencies !== virtual.state[ index ];
        if ( dependencies === undefined || hasChanged ) {
            callback();
            virtual.state[ index ] = dependencies;
        };
    };


    return {
        createRoot,
        createElement,
        useState, 
        useEffect
    }
};

export default UMD( this, React );