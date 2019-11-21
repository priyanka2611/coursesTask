import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from '../redux/action';
import './mixstyle.css';
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
                    {item.title || '-'} - 
                    {item.author || '-'} - 
                    {item.category || '-'} - 
                    {item.length || '-'}
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
    courseList: state.courseList
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
