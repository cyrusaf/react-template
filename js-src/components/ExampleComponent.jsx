import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

class ExampleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      exampleValue: 0
    }
    this.makeRequest = this.makeRequest.bind(this)
  }

  makeRequest(event) {
    let self = this
    console.log(self)
    Axios.get("http://www.diffbot.com/company/")
    .then(function(response) {
      console.log(response)
      self.setState({exampleValue: self.state.exampleValue+1})
    }).catch(function(error) {
      console.log(error)
      self.setState({exampleValue: self.state.exampleValue+1})
    })
  }

  render () {
    return (
      <div onClick={this.makeRequest}>
        <div>State.exampleValue: {this.state.exampleValue}</div>
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  exampleValue: React.PropTypes.number.isRequired
}

ExampleComponent.defaultProps = {
  exampleValue: 0
}

export default ExampleComponent
