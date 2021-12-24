export const START = 'COVID/HISTORICAL/START';
export const FAILURE = 'COVID/HISTORICAL/FAILURE';
export const HISTORICAL = 'COVID/HISTORICAL/HISTORICAL';

export const loadingStart = () => ({
  type: START,
});

export const manageFailure = (payload) => ({
  type: FAILURE,
  payload,
});

export const updateHistorical = (payload) => ({
  type: HISTORICAL,
  payload,
});
