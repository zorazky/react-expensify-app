import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


//react-test-renderer

test('should render Header correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
