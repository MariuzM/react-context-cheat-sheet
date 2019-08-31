import React, { Component } from 'react';
import { _createContext } from './_context';

// ===============================================
// Class base
// ===============================================
// export default class Navbar extends Component {
//   static contextType = _createContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav
//         style={{
//           background: theme.ui,
//           color: theme.syntax
//         }}
//       >
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

// ===============================================
// Converted to Context.Consumer
// Also be used to consume multiple _context's
// ===============================================
// export default class Navbar extends Component {
//   render() {
//     return (
//       <_createContext.Consumer>
//         {value => {
//           const { isLightTheme, light, dark } = value;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav
//               style={{
//                 background: theme.ui,
//                 color: theme.syntax
//               }}
//             >
//               <h1>Context App</h1>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}
//       </_createContext.Consumer>
//     );
//   }
// }

// ===============================================
// Converted to function base
// ===============================================
export default function Navbar() {
  return (
    <_createContext.Consumer>
      {value => {
        const { isLightTheme, light, dark } = value;
        const theme = isLightTheme ? light : dark;
        return (
          <nav
            style={{
              background: theme.ui,
              color: theme.syntax
            }}
          >
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}
    </_createContext.Consumer>
  );
}