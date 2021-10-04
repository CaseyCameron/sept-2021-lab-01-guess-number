import React, { Component } from 'react';
import { checkGuess, getRandomNumber } from '../utils/utils.js';

export default class Game extends Component {
  state = {
    guess: '',
    tries: 0,
    wins: 0,
    number: 0,
    message: ''
  }

  componentDidMount() {
    this.setState({ number: getRandomNumber() });
  }

  handleChange = ({ target }) => {
    this.setState({ guess: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { guess, number, message } = this.state;
    this.setState({ message: checkGuess(Number(guess), number) });
    console.log(message);
  }

  render() {
    const { guess, message } = this.state;
    console.log(guess);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Guess</label>
          <input type='number' value={guess} onChange={this.handleChange} />
          <button>Submit</button>
          <div>{message}</div>
        </form>
      </div>
    )
  }
}
