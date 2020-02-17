import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {u: '', p: ''}
  }

  handleChange(event) {
    if (event.target.name==="username")
      this.setState({u: event.target.value})
    if (event.target.name==="password")
      this.setState({p: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:5000/', {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      body: JSON.stringify(this.state),
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          <div className="App__Form">
            <div className="Form__Title">
              Administrative Login
            </div>
            <br /> <br />
            <form className="Form" onSubmit={this.handleSubmit}>
              <div className="Username">
              Username: 
              &nbsp; &nbsp; &nbsp;
              <input type="text" name="username" value={this.state.u} onChange={this.handleChange} />
              </div>
              <br />
              <div className="Password">
              Password: 
              &nbsp; &nbsp; &nbsp;
              <input type="password" name="password" value={this.state.p} onChange={this.handleChange} />
              </div>
              <br /> <br /> <br />
              <button className="submit" type="submit"> Login </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App