import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MonthOpenCasesChart from '../components/OpenCases/ChartOpenCasesMonth';

const mockStore = configureStore([]);

describe('render correctly MonthOpenCasesChart component', () => {
  let store;
  let tree;
  beforeEach(() => {
    store = mockStore({
      latest: {},
      dayBefore: {},
      historical: {},
    });
    tree = renderer.create(
      <Provider store={store}>
        <MonthOpenCasesChart />
      </Provider>,
    );
  });
  it('should render with given state from redux store', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
