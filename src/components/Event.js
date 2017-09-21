import React from 'react';

class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }

  handleClick(e) {
    e.preventDefault;
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default Event;
