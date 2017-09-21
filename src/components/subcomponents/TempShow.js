import React from 'react';


function TempShow(props) {
  const celcius = props.celcius;
  return (
    <div>
      {celcius != '' && Number.isInteger(celcius) ? "water is " +
       (celcius <=0 ? "frozen" : celcius >= 100 ? "boiling" : "liquid")
       : ''}
    </div>
  );
}


export default TempShow
