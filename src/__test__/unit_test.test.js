import { fillDeathData } from '../components/Deaths/ChartDeathsMonth';
import { getDeathsDataLastDay, computeGrowingRate } from '../components/Deaths/Deaths';

describe('fillDeathData', () => {
  const trueDict = {
    dates: {
      '12-03-2020': {
        countries: {
          Tunisia: {
            today_new_deaths: 120,
          },
        },
      },
      '15-16-2018': {
        countries: {
          Tunisia: {
            today_new_deaths: 100,
          },
        },
      },
    },
  };
  test('fillDeathData when it has real input data', () => {
    expect(fillDeathData(trueDict)).toStrictEqual([['12-03-2020', '15-16-2018'], [120, 100]]);
  });
});

describe('getDeathsDataLastDay', () => {
  const deathData = {
    dates: {
      '21-12-2021': {
        countries: {
          Tunisia: {
            today_vs_yesterday_deaths: 0.5,
            yesterday_deaths: 5,
            today_new_deaths: 120,
            today_deaths: 7,
          },
        },
      },
    },
  };
  const day = '21-12-2021';
  test('getDeathsDataLastDay when it has real input data', () => {
    expect(getDeathsDataLastDay(deathData, day)).toEqual([1, 5, 120, 7]);
  });
});

describe('computeGrowingRate', () => {
  const deathData = {
    dates: {
      '21-12-2021': {
        countries: {
          Tunisia: {
            today_new_deaths: 50,
          },
        },
      },
    },
  };
  const day = '21-12-2021';
  const lastDeaths = 100;
  test('computeGrowingRate when it has real input data', () => {
    expect(computeGrowingRate(deathData, day, lastDeaths)).toBe(100);
  });
});
