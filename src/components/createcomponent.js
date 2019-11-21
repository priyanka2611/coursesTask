import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from '../redux/action';

class CreateComponent extends Component {
  state = {
    title: null,
    author: null,
    category: null,
    length: null
  };

  onChangeVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const { title, author, category, length } = this.state;
    this.props.handleSubmit({ title, author, category, length });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>ADD</h1>
        <div>
          <input
            required
            type="text"
            name="title"
            placeholder="Enter Title of course"
            onChange={this.onChangeVal}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.onChangeVal}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="category"
            placeholder="category of course"
            onChange={this.onChangeVal}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="length"
            placeholder="length of couse in minutes or hours"
            onChange={this.onChangeVal}
          />
          <br />
          <br />
          <button onClick={() => this.onSubmit()}>SUBMIT</button>
          <button>CLEAR VALUES</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleSubmit
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
