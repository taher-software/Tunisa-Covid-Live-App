import { loadingStart, manageFailure, update } from '../actions/actions';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/';
const fetchData = (date) => {
  const url = `${baseUrl + date}/country/tunisia`;
  fetch(url);
};

const lastDayNumbers = (lastDay) => (dispatch) => {
  dispatch(loadingStart);
  fetchData(lastDay)
    .then((res) => res.json())
    .then((res) => dispatch(update(res)))
    .catch((error) => dispatch(manageFailure(error.message)));
};

export default lastDayNumbers;
