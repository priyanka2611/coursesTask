import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSubmit } from './redux/action';

class CreateComponent extends Component {
  state={
       title :null,
       author: null,
       category: null,
       length : null
  }

  handleSubmitForEdit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({
      title= data.title,
      author= data.author,
      category= data.category,
      length= data.length
    })
  }
render() {
return (
<div>
  <h1>ADD</h1>
  <form onSubmit ={handleSubmitForEdit}>
     <input required type="text" name ="title" placeholder="Enter Title of course" onChange= {this.props.addValues}>{this.props.titile}</input><br /><br />
   <input required type="text" name ="author" placeholder="Author" onChange= {this.props.addValues}>{this.props.author}</input><br /><br />
   <input required type="text" name ="category" placeholder="category of course" onChange= {this.props.addValues}>{this.props.category}</input><br /><br />
   <input required type="text" name = "length" placeholder="length of couse in minutes or hours" onChange= {this.props.addValues}>{this.props.length}</input><br /><br />
   <button>CHANGE</button>
  
  </form>
</div>
);
}
}


const mapStateToProps = state => {
  return {length: state.courseList.length,
            title: state.courseList.titile,
        author: state.courseList.author,
    category: this.courseList.category};
};

const mapDispatchToProps = state => {
//   return bindActionCreators(
//     {
//         handleSubmitForEdit
//     },
//     state
//   );
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
