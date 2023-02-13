import { SET_JOB_DATA } from "../actions";

const initialJobState = {
  jobs: [],
};

const JobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOB_DATA:
      return {
        ...state,
        jobs: [action.payload],
      };
    default:
      return state;
  }
};

export default JobReducer;
