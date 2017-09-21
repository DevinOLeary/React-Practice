import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}





class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false}
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;


    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
      : <LoginButton onClick={this.handleLoginClick.bind(this)}/>}
      </div>
    );
  }
}

export default LoginControl;
