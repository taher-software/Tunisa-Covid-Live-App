import { loadingStart, manageFailure, updateHistorical } from '../actions/actions';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/';
const fetchData = (startDate, endDate) => {
  const url = `${baseUrl}/country/tunisia?date_from=${startDate.toString()}&date_to=${endDate.toString()}`;
  return fetch(url);
};

const getHistoricalData = (startDate, endDate) => (dispatch) => {
  dispatch(loadingStart);
  fetchData(startDate, endDate)
    .then((res) => res.json())
    .then((res) => dispatch(updateHistorical(res)))
    .catch((error) => dispatch(manageFailure(error.message)));
};

export default getHistoricalData;
