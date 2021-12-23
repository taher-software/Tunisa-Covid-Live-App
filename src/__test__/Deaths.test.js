import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DeathsCases from '../components/Deaths/Deaths';

const mockStore = configureStore([]);

describe('render correctly DeathsCases component', () => {
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
        <DeathsCases />
      </Provider>,
    );
  });
  it('should render with given state from redux store', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
