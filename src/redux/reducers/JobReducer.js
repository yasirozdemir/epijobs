import { SET_JOB_DATA, SET_COMPANY_JOB_DATA } from "../actions";

const initialJobState = {
  jobs: [],
  companyJobs: [],
};

const JobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_JOB_DATA:
      return {
        ...state,
        jobs: [action.payload],
      };
    case SET_COMPANY_JOB_DATA:
      return {
        ...state,
        companyJobs: [action.payload],
      };
    default:
      return state;
  }
};

export default JobReducer;
