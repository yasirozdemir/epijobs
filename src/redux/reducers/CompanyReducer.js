import {
  SET_COMPANY_DATA,
  SET_IS_ERROR_COMPANY,
  SET_IS_LOADING_COMPANY,
} from "../actions";

const initialCompanyState = {
  companyData: [],
  isErrorCompany: false,
  isLoadingCompany: true,
};

const CompanyReducer = (state = initialCompanyState, action) => {
  switch (action.type) {
    case SET_COMPANY_DATA:
      return {
        ...state,
        companyData: action.payload,
      };
    case SET_IS_ERROR_COMPANY:
      return {
        ...state,
        isErrorCompany: action.payload,
      };
    case SET_IS_LOADING_COMPANY:
      return {
        ...state,
        isLoadingCompany: action.payload,
      };
    default:
      return state;
  }
};

export default CompanyReducer;
