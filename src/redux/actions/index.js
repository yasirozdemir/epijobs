export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SET_JOB_DATA = "SET_JOB_DATA";
export const SET_COMPANY_JOB_DATA = "SET_COMPANY_JOB_DATA";

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

// export const removeFromFavAction = (job) => {
//   return {
//     type: REMOVE_FROM_FAV,
//     payload: job,
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
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: SET_JOB_DATA,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCompanyJobData = (companyName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" + companyName
      );
      if (response.ok) {
        const companyJobData = await response.json();
        dispatch({
          type: SET_COMPANY_JOB_DATA,
          payload: companyJobData.data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
