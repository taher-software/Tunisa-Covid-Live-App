import { loadingStart, manageFailure, update } from '../actions/actions';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/';
const fetchData = (date) => {
  const url = `${baseUrl + date.toString()}/country/tunisia`;
  return fetch(url);
};

const dayBeforeNumbers = (dayBefore) => (dispatch) => {
  dispatch(loadingStart);
  fetchData(dayBefore)
    .then((res) => res.json())
    .then((res) => dispatch(update(res)))
    .catch((error) => dispatch(manageFailure(error.message)));
};

export default dayBeforeNumbers;
