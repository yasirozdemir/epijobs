import { SET_COMPANY_DATA } from "../actions";

const initialCompanyState = null;

const CompanyReducer = (state = initialCompanyState, action) => {
  switch (action.type) {
    case SET_COMPANY_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default CompanyReducer;
