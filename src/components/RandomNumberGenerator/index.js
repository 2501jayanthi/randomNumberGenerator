// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  onClickReset = () => {
    const newNumber = 0
    this.setState({randomNumber: newNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-bg-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="buttons-container">
            <button
              type="button"
              className="button"
              onClick={this.onGenerateRandomNumber}
            >
              Generate
            </button>
            <button
              type="button"
              className="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>

          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
