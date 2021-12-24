export const START = 'COVID/LATEST/START';
export const FAILURE = 'COVID/LATEST/FAILURE';
export const LASTUPDATE = 'COVID/LATEST/LATESTUPDATE';

export const loadingStart = () => ({
  type: START,
});

export const manageFailure = (payload) => ({
  type: FAILURE,
  payload,
});

export const update = (payload) => ({
  type: LASTUPDATE,
  payload,
});
