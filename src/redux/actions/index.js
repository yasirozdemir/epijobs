export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SET_JOB_DATA = "SET_JOB_DATA";
export const SET_COMPANY_DATA = "SET_COMPANY_DATA";
export const SET_IS_ERROR_JOB = "SET_IS_ERROR_JOB";
export const SET_IS_LOADING_JOB = "SET_IS_LOADING_JOB";
export const SET_IS_ERROR_COMPANY = "SET_IS_ERROR_COMPANY";
export const SET_IS_LOADING_COMPANY = "SET_IS_LOADING_COMPANY";

// export const addToFavAction = (job) => {
//   return {
//     type: ADD_TO_FAV,
//     payload: job,
//   };
// };

export const addToFavFunction = (job) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_FAV,
      payload: job,
    });
  };
};

// export const removeFromFavAction = (jobID) => {
//   return {
//     type: REMOVE_FROM_FAV,
//     payload: jobID,
//   };
// };

export const removeFromFavFunction = (jobId) => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_FROM_FAV,
      payload: jobId,
    });
  };
};

export const getJobData = (query) => {
  return async (dispatch) => {
    dispatch({
      type: SET_IS_LOADING_JOB,
      payload: true,
    });
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SET_JOB_DATA,
          payload: data,
        });
        dispatch({
          type: SET_IS_LOADING_JOB,
          payload: false,
        });
        dispatch({
          type: SET_IS_ERROR_JOB,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: SET_IS_LOADING_JOB,
          payload: false,
        });
        dispatch({
          type: SET_IS_ERROR_JOB,
          payload: true,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_IS_ERROR_JOB,
        payload: true,
      });
      dispatch({
        type: SET_IS_LOADING_JOB,
        payload: false,
      });
    }
  };
};

export const getCompanyData = (companyName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" + companyName
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SET_COMPANY_DATA,
          payload: data,
        });
        dispatch({
          type: SET_IS_LOADING_COMPANY,
          payload: false,
        });
        dispatch({
          type: SET_IS_ERROR_COMPANY,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: SET_IS_LOADING_COMPANY,
          payload: false,
        });
        dispatch({
          type: SET_IS_ERROR_COMPANY,
          payload: true,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_IS_LOADING_COMPANY,
        payload: false,
      });
      dispatch({
        type: SET_IS_ERROR_COMPANY,
        payload: true,
      });
    }
  };
};
