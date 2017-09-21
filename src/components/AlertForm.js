import React from 'react';



class AlertForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: "coconut"}
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    alert(this.state.value);
    e.preventDefault;
  }


  render() {
    const options = ["coconut", "apple", "orange"];
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label value="Dropdown">
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            {options.map((option) =>
              <option value={option}>{option}</option>)}
          </select>
          <input type="submit" value="Submit"/>
        </label>
      </form>
    );
  }


}


export default AlertForm;
