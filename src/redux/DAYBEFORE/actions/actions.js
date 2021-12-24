export const START = 'COVID/DAYBEFORE/START';
export const FAILURE = 'COVID/DAYBEFORE/FAILURE';
export const DAYBEFOREUPDATE = 'COVID/DAYBEFORE/LATESTUPDATE';

export const loadingStart = () => ({
  type: START,
});

export const manageFailure = (payload) => ({
  type: FAILURE,
  payload,
});

export const update = (payload) => ({
  type: DAYBEFOREUPDATE,
  payload,
});
