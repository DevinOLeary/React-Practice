import React from 'react';


function WarningBanner(props) {
  return(
  <div>
    {!props.warn ? ( null
    ) : (
      <div>
        Warning!
      </div>
    )}
  </div>
  );
}




class WarningPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }


  render() {

    const showWarning = this.state.showWarning;

    return(
      <div>
        <WarningBanner warn={showWarning}/>
        <button onClick={this.handleToggleClick.bind(this)}>
          {this.state.showWarning ? 'hide' : 'show'}
        </button>
      </div>

    );
  }
}




export default WarningPage;
