import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProjectList />
      </div>
    );
  }
}

export default App;
