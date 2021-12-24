import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConfirmedCases from '../components/ConfirmedCases/ConfirmedCases';

const mockStore = configureStore([]);

describe('render correctly ConfirmedCases component', () => {
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
        <ConfirmedCases />
      </Provider>,
    );
  });
  it('should render with given state from redux store', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
