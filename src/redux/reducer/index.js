import { ROUTECHANGEFORNEW, ROUTECHANGEFOREDIT } from '../constants';
const initialState = { 
    courseList: [
        { id: '', Title: '', Length: '', Category: '', Author :'' }
     ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTECHANGEFORNEW: {
      return {
        ...state,
        urlnew: action.payload
      };
    }
    case ROUTECHANGEFOREDIT: {
      return {
        ...state,
        urledit: action.payload
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
