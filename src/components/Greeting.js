import React from 'react';

function UserGreeting() {
  return (
    <div>
      <h3>Hello Friend!</h3>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h3>Who r u?</h3>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting/>
  } else {
    return <GuestGreeting />
  }
}

export default Greeting;
