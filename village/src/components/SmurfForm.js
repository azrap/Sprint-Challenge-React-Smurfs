import React, { Component } from 'react';

class SmurfForm extends React.Component {
  state = {
    smurf: this.props.activeItem || {
        name: "",
      age: "",
      height: ""
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "age") {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);

    this.setState({
      smurf: {
        name: "",
      age: "",
      height: ""
      }
    })
  };

  render() {
    return (
      <div>
        <h2>Add New Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
            />
            <div className="baseline" />

          <input
            type="string"
            name="height"
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
          />

            <div className="baseline" />
          

          <button className="md-button form-button">Add New smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
