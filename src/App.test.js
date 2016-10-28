import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').length).toEqual(1);
  expect(wrapper.find('.App-logo').length).toEqual(1);
});
