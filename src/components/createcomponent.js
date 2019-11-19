import React, { Component } from 'react';

class CreateComponent extends Component {
render() {
return (
<div>
  <h1>ADD</h1>
  <form>
   <input required type="text" placeholder="Enter Title of course">Title</input><br /><br />
   <input required type="text" placeholder="Author">Author</input><br /><br />
   <input required type="text" placeholder="category of course">Category</input><br /><br />
   <input required type="text" placeholder="length of couse in minutes or hours">Length</input><br /><br />
   <button>SUBMIT</button>
   <button>CLEAR VALUES</button>
  </form>
</div>
);
}
}
export default CreateComponent;