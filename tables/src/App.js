import Table from './Table';
import Form from './Form';
import './App.css';
import React, { Component } from 'react';


class App extends Component {

  state = {
    rows: [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        }
      ]
  }

  render() {
    return (
      <div className="container">
        <Table data={this.state.rows} removeRow={this.removeRow} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }

  removeRow = (index) => {
    const { rows } = this.state;

    this.setState({
      rows: rows.filter((row, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (row) => {
    this.setState({rows: [...this.state.rows, row]})
  }
}

export default App;
