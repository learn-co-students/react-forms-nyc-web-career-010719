import React, { Component } from 'react';

export default class ControlledInput extends Component {
  state = {
    firstName: 'John',
    lastName: 'Henry'
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <input
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={e => this.handleChange(e)}
          />
        </form>
        <button
          onClick={() => console.log(this.state)}
        >
          wass state
        </button>
      </div>
    );
  };
};
