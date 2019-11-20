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

  handleSubmit=(event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    // this.setState({
    //   title= data.title,
    //   author= data.author,
    //   category= data.category,
    //   length= data.length
    // })
    this.props.submitAction(data);
  }
render() {
return (
<div>
  <h1>ADD</h1>
  <form onSubmit ={this.handleSubmit}>
   <input required type="text" name ="title" placeholder="Enter Title of course" onChange= {this.props.addValues}>Title</input><br /><br />
   <input required type="text" name ="author" placeholder="Author" onChange= {this.props.addValues}>Author</input><br /><br />
   <input required type="text" name ="category" placeholder="category of course" onChange= {this.props.addValues}>Category</input><br /><br />
   <input required type="text" name = "length" placeholder="length of couse in minutes or hours" onChange= {this.props.addValues}>Length</input><br /><br />
   <button>SUBMIT</button>
   <button>CLEAR VALUES</button>
  </form>
</div>
);
}
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  // return bindActionCreators(
  //   {
  //     handleSubmit
  //   },
  //   state
  // );
  return {
    submitAction:(formData)=> dispatch({type:handleSubmit,formData: formData })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
