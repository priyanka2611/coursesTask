import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from './redux/action';
import { Redirect } from 'react-router-dom';

import ListComponent from './components/listcomponent';
import './App.css';

class App extends Component {
  routeChangeForNew = () => {
    return this.props.history.push('/create');
  };
  routeChangeForEdit = () => {
    return this.props.history.push('/edit');
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>COURSES</h2>
          <button onClick={this.routeChangeForNew}>NEW</button>
          <button onClick={this.routeChangeForEdit}>EDIT</button>
          <ListComponent />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mnumber: state.mobile,
    number: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
