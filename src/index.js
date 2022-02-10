// import React from 'react';
// import ReactDOM  from 'react-dom';
// function Welcome(){
//  return(
//    <h1>Welcome to react</h1>
//  )
// }
// ReactDOM.render(
//   <Welcome/>,
//   document.getElementById('root')
// )

// // )
// // let element = document.createElement(h1);
// // element.innerHTML='This is from JAVASCRIPT';
// // document.getElementById('root').appendChild(element);





import React from 'react';
import ReactDOM  from 'react-dom';
import Picture from './images/pic.jpg';
import Lizard from './Lizard.js';
import './style.css'
ReactDOM.render(
  <div>
   <center>
    <img className="image" src={Picture} alt="" />
    <Lizard />
    </center>
  </div>,
document.getElementById('root')
)