import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SELECTCOURSE} from '../redux/constants'
import './mixstyle.css';
class ListComponent extends Component {
  render() {
    console.log(this.props.courseList);
    return (
      <div>
        {this.props.courseList.length < 1 ? (
            <h2 className="h3">No list found !</h2>
          ) :(<table>
                <thead>
                  <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Category</td>
                    <td>Length</td>
                  </tr>
                </thead>
                <tbody>
                {this.props.courseList.map(item => {
                  return (
                    <tr 
                      className={this.props.selectedCourseId === item.id? 'selected': ''}
                      onClick={() => this.props.selectCourse(item.id)}
                      key={item.id}>
                      <td> {item.title || '-'}</td>
                      <td> {item.author || '-'}</td>
                      <td> {item.category || '-'}</td>
                      <td> {item.length || '-'}</td>
                    </tr>
                  );
              })}
                </tbody>
          </table>)}
      </div>
        
    );
  }
}
const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    selectedCourseId: state.selectedCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {selectCourse: (id)=> dispatch({type: SELECTCOURSE, courseId: id})}
}
export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);
