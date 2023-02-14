import { SET_IS_ERROR_JOB, SET_IS_LOADING_JOB, SET_JOB_DATA } from "../actions";

const initialJobState = {
  jobData: [],
  isErrorJob: false,
  isLoadingJob: true,
};

const JobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOB_DATA:
      return {
        ...state,
        jobData: action.payload,
      };
    case SET_IS_ERROR_JOB:
      return {
        ...state,
        isErrorJob: action.payload,
      };
    case SET_IS_LOADING_JOB:
      return {
        ...state,
        isLoadingJob: action.payload,
      };
    default:
      return state;
  }
};

export default JobReducer;
