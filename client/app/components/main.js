import React, {Component} from 'react';

class ClickPage extends React.Component {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.props.clickDispatch("GET");
  }

  click(e){
    this.props.clickDispatch("");
  }

  render(){
    return (
      <div>
        <h1>{this.props.clickDisplay}</h1>
        <button id="clickButton" onClick={this.click}>"CLICK!!!"</button>
      </div>
    )
  }
}

export default ClickPage;
