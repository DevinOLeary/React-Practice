import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Event from './components/Event';
import LoginControl from './components/LoginControl';
import WarningPage from './components/WarningPage';
import ListNames from './components/ListNames';
import AlertForm from './components/AlertForm';
import AdvancedForm from './components/AdvancedForm';
import TempCalculator from './components/TempCalculator';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "NuVamp", date: new Date()}
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <Clock />
        <LoginControl />
        <WarningPage />
        <ListNames />
        <AlertForm />
        <AdvancedForm />
        <TempCalculator />
      </div>
    );
  }
}

export default App;
