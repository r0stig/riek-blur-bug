import React, { Component } from 'react'
import { RIEInput } from 'riek'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'test'
    }

    setInterval(() => {
      console.log('updating state...')
      this.setState({
        otherProp: 'otherValue'
      })
    }, 2000)

    this.handleNameChange = newName => {
      this.setState({
        name: newName.text
      })
    }
  }

  render () {
    return (
      <RIEInput
        value={this.state.name}
        change={this.handleNameChange}
        propName='text'
        shouldRemainWhileInvalid={true}
         />
    )
  }
}

export default App
