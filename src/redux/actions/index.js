export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SET_JOB_DATA = "SET_JOB_DATA";

export const addToFavAction = (job) => {
  return {
    type: ADD_TO_FAV,
    payload: job,
  };
};

export const addToFavFunction = (job) => {
  return async (dispatch, getState) => {
    console.log(getState());
    dispatch({
      type: ADD_TO_FAV,
      payload: job,
    });
  };
};

export const removeFromFavAction = (job) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: job,
  };
};

export const removeFromFunction = (job) => {
  return async (dispatch, getState) => {
    console.log(getState());
    dispatch({
      type: REMOVE_FROM_FAV,
      payload: job,
    });
  };
};

export const getJobData = (query) => {
  return async (dispatch) => {
    console.log(query);
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      console.log("response", response);
      if (response.ok) {
        const jobData = await response.json();
        console.log(jobData.data);
        dispatch({
          type: SET_JOB_DATA,
          payload: jobData.data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const trial = () => {};
