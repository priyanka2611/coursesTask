import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from '../redux/action';
class ListComponent extends Component {
  render() {
    console.log(this.props.courseList);
    return (
      <div>
        <>
          {this.props.courseList.length < 1 ? (
            <h2 className="h3">No list found !</h2>
          ) : (
            <ul className="Box">
              {this.props.courseList.map(item => {
                return (
                  <li>
                    {item.title || 'no city name'}
                    {item.author || 'no city name'}
                    {item.category || 'no city name'}
                    {item.length || 'no city name'}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    length: state.courseList.Length,
    title: state.courseList.titile,
    author: state.courseList.author,
    category: state.courseList.category
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
