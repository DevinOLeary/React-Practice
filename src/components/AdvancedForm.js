import React from 'react';

class AdvancedForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      isGoing: false,
      guestNumber: 0,
      invitationString: ""
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const guestNumber = this.state.guestNumber;
    const guests = (guestNumber >= 2 || guestNumber === 0 ? " guests" : " guest");

    this.setState({
      [name]: value
    });
    this.setState({
      invitationString: this.state.guestName + "" + (this.state.isGoing ? " is going, and is bringing " +
      guestNumber + guests : " is not going")
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    const guestNumber = this.state.guestNumber;
    const guests = (guestNumber >= 2 || guestNumber === 0 ? " guests" : " guest");
    alert(
          this.state.guestName + "" + (this.state.isGoing ? " is going, and is bringing " +
          guestNumber + guests : " is not going")
      );
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <h3>Guest Name:</h3>
          <input type="text" name="guestName" value={this.state.guestName} onChange={this.handleChange.bind(this)}/>
        <h3>Are You Going?</h3>
          Yes: <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange.bind(this)}/>
          {this.state.isGoing ?
            <div>
              <h3>How Many Guest Are You Bringing?</h3>
                <input type="text" name="guestNumber" value={this.state.guestNumber} onChange={this.handleChange.bind(this)}/>
            </div>
              : ""
          }
          <br/>
        <input type="submit" value="Submit"/>
        <p>{this.state.invitationString}</p>
      </form>
    </div>
    );
  }
}

export default AdvancedForm;
