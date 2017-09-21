import React from 'react';

function NameItems(props) {

  return (
    <li>{props.name}</li>
  );
}


function ListNames() {
  const names = ['Devin', 'Emily', 'Smokey', 'Debbie'];

    return(
      <ul>
        {names.map((name) =>
          <NameItems key={name} name={name}/>
        )}
      </ul>
    );


}


export default ListNames;
