import React from 'react';



const Smurf = props => {

  const smurf = props.smurfs.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.smurfs.length || !smurf) {
    return <h2>Loading item data...</h2>;
  }
  console.log(smurf)


  return (
    
    <div className="smurf-wrapper">
    
        <h2>{smurf.name}</h2>
        <h4>{smurf.age}</h4>
        <h4>{smurf.height}</h4>
        </div>
      
  );
}

export default Smurf;

