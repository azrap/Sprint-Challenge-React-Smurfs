import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';



function Smurfs(props) {

  function routeToSmurf(ev, smurf) {
    ev.preventDefault();
    props.history.push(`/${smurf.id}`);
  }

  console.log(props)
 
  return (
    <div className="smurf-list-wrapper">
       <h3>Smurf Village</h3>
      {props.smurfs.map(smurf => (
        <div
          onClick={ev => routeToSmurf(ev, smurf)}
          key={smurf.id}
          className="smurf-card">
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
}


export default Smurfs;




// class Smurfs extends Component {
//   render() {
//     return (
//       <div className="Smurfs">
//         <h1>Smurf Village</h1>
//         <ul>
//           {this.props.smurfs.map(smurf => {
//             return (
//               <Smurf
//                 name={smurf.name}
//                 id={smurf.id}
//                 age={smurf.age}
//                 height={smurf.height}
//                 key={smurf.id}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// Smurf.defaultProps = {
//  smurfs: [],
// };

// export default Smurfs;
