import React from "react";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import NavBar from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
test('render correctly navbar', () => {
  const tree = renderer.create(
    <Router>
      <NavBar />
    </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});