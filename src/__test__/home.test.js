import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '../components/HomePage/home';

const mockStore = configureStore([]);

describe('render correctly Homepage component', () => {
  let store;
  let tree;
  beforeEach(() => {
    store = mockStore({
      latest: {},
      dayBefore: {},
    });
    store.dispatch = jest.fn();
    tree = renderer.create(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
  });
  it('should render with given state from redux store', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
