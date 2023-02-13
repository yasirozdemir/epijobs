import { SET_JOB_DATA } from "../actions";

const initialJobState = null;

const JobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOB_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default JobReducer;
