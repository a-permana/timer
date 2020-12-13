import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 20,
      isRunning: false
    }
    // this.handleStartClick = this.handleStartClick.bind(this)
    // this.handleStopClick = this.handleStopClick.bind(this)
  }

    handleStartClick = () => {
    this.setState({isRunning: true})

    this.myInterval = setInterval(() => {
        if(this.state.count > 0) {
            this.setState(prevState => ({
                 count: prevState.count - 1
            }))
        } else if (this.state.count = 0) {
            clearInterval(this.myInterval)
        }
    },1000)
}

  handleStopClick = () => {
    this.setState({isRunning: false})
        clearInterval(this.myInterval) 
    }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }

  render () {
    const {count} = this.state
    return (
      <React.Fragment>
        <h1>{this.state.count>0 ? count : "selesai"}</h1>
        <td>
        <button onClick={this.handleStartClick} style={{ padding: '5px 10px', fontSize: '1rem', color: "green"}}>
            Start
        </button>
        <button onClick={this.handleStopClick} style={{ padding: '5px 10px', fontSize: '1rem', color: "red"}}>
            Stop
        </button>
        </td>
      </React.Fragment>
    )
  }
}

export default Timer