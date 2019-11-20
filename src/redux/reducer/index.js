import { HANDLESUBMIT } from '../constants';
const initialState = { 
    courseList: [
        { id: '', title: '', length: '', category: '', author :'' }
     ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLESUBMIT: {
      return {
        ...state,
        courseList: state.courseList.concat(action.formData)
      };
    }
   

    default:
      return state;
  }
};

export default rootReducer;
