import { HANDLESUBMIT } from '../constants';

const initialState = {
  courseList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLESUBMIT: {
      return {
        ...state,
        courseList: [...state.courseList, action.payload]
      };
    }

    default:
    return state;
  }
};

export default rootReducer;
