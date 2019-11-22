import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleChange } from '../redux/action';

class EditComponent extends Component {

  state = ({
    title: undefined,
    author: undefined,
    category: undefined,
    length: undefined
  })

  
  onChangeVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeValue = () => {
    const { title, author, category, length } = this.state;
    this.props.handleChange({ title, author, category, length ,id: this.props.course.id});
    this.props.history.push('/');
  };
  render() {
    if(this.props.course)
    return (
      <div>
        <h1>ADD</h1>
        <form onSubmit={this.handleSubmitForEdit}>
          <input
            required
            type="text"
            name="title"
            onChange={this.onChangeVal}
            placeholder="Enter Title of course"
            defaultValue={this.props.course.title}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.onChangeVal}
            defaultValue={this.props.course.author}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="category"
            placeholder="category of course"
            onChange={this.onChangeVal}
            defaultValue={this.props.course.category}
          />
          <br />
          <br />
          <input
            required
            type="text"
            name="length"
            placeholder="length of couse in minutes or hours"
            onChange={this.onChangeVal}
            defaultValue={this.props.course.length}
          />
          <br />
          <br />
          <button onClick={() => this.onChangeValue()}>CHANGE</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selectedCourse = state.courseList.find(c => c.id === state.selectedCourse)
  return {
    course: selectedCourse
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleChange
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
