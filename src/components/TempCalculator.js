import React from 'react';
import TempShow from './subcomponents/TempShow';

class TempCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  render() {
    const temp = this.state.temperature;
    return(
      <div>
        <form>
          Enter Temperature: &nbsp;
          <input type="text" value={temp}
          onChange={this.handleChange.bind(this)}/>
        </form>
        <br/>
        <TempShow celcius={parseFloat(this.state.temperature)}/>
      </div>
    );
  }
}

export default TempCalculator;
