import { HANDLESUBMIT, SELECTCOURSE,HANDLECHANGE } from '../constants';

const initialState = {
  courseList: [],
  selectedCourse:0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLESUBMIT: {
      const courseId = state.courseList.length + 1
      const courseObject = {...action.payload, id: courseId}
      return {
        ...state,
        courseList: [...state.courseList, courseObject]
      };
    }
    case SELECTCOURSE:
      return {
        ...state,
        selectedCourse: action.courseId
      }
      case HANDLECHANGE:
        const courseId = action.payload.id 
        const courseIndex= state.courseList.findIndex(c => c.id === (courseId))
        const courseListUpdated = [...state.courseList]
        courseListUpdated[courseIndex] = {...action.payload}
          return {
            ...state,
            courseList: courseListUpdated,
            selectedCourse: 0
          };

        
    default:
    return state;
  }
};

export default rootReducer;
