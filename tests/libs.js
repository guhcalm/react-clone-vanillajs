/**
 * App Module
 * @main /index.js
 * @author Gustavo Henrique <guhcalm@outlook.com>
 * @version 0.0.1
 * @description A React clone lib 
 * @param {string} title - The title of a book
 */

 const UMD = async () => typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.React = {}));
 const React = exports => {
     "use strict";
 };
 UMD( this, React );
 
 export default props => {
     return create.Element('main', {...props}, [])
 }
 
 try {
 
 } catch ( e ) { // handle errors
     throw new Error('erro fatal')
 } finally { // always run regardless cath ands try
 
 }
 
 // loops
 
 for ( const key in object ) {}
 for ( const value of array ) {}
 
 // JS-DOC -> formart to formart u code
 /**
  * Get the day
  * @param { Date } date The date object
  * @return { String }   The day of the week
  */
 function getDate ( date ) {
     let days = ['Sunday', ...]
     return days[date]
 }
 
 //create a foundation - revealing module pattern - imediately invoked function
 // return a object of methods the you want expose public
 // the nice thing about this 
 
 /**
      * Get the day
      * @param { Date } date The date object
      * @return { String }   The day of the week
      */
  function getDate ( date ) {
     let days = ['Sunday', ...];
     return days[date];
 };
 export {
     getDate
 };
 
 
 export default function App () {
 
 }


 export default (( global, factory ) => typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.React = {})))
( self, exports => {
    "use strict";
    const useState = 'oi doidos'

    return {
        useState
    }
});

Immediately Invoked Function Expression