import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from '../redux/action';

class EditComponent extends Component {
  state = {
    title: null,
    author: null,
    category: null,
    length: null
  };

  handleSubmitForEdit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({
      title: data.title,
      author: data.author,
      category: data.category,
      length: data.length
    });
  }
  render() {
    return (
      <div>
        <h1>ADD</h1>
        <form onSubmit={this.handleSubmitForEdit}>
          <input
            required
            type="text"
            name="title"
            placeholder="Enter Title of course"
            onChange={this.props.addValues}
            value={this.props.titile}
          />

          <br />
          <br />
          <input
            required
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.props.addValues}
            value={this.props.author}
          ></input>
          <br />
          <br />
          <input
            required
            type="text"
            name="category"
            placeholder="category of course"
            onChange={this.props.addValues}
            value={this.props.category}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="length"
            placeholder="length of couse in minutes or hours"
            onChange={this.props.addValues}
            value={this.props.length}
          />
          <br />
          <br />
          <button>CHANGE</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    length: state.courseList.length,
    title: state.courseList.title,
    author: state.courseList.author,
    category: state.courseList.category
  };
};

const mapDispatchToProps = dispatch => {
  //   return bindActionCreators(
  //     {
  //         handleSubmitForEdit
  //     },
  //     state
  //   );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
