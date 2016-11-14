import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import Candidates from './Candidates';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').length).toEqual(1);
  expect(wrapper.find('.App-logo').length).toEqual(1);
});

it('contains a form', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.Section-form').length).toEqual(1);
});

it('contains a main section', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.Section-main').length).toEqual(1);
});

it('has props for componentDidMount', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.props().componentDidMount).toBeDefined;
});

it('has props for handleUpdateInput', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.props().handleUpdateInput).toBeDefined;
});

describe('<App />', () => {
  it('renders a <Candidates /> component', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
    expect(wrapper.find(Candidates).length).toEqual(1);
  });

  it('renders an <AutoComplete /> component', () => {
    const wrapper = mount(
       <MuiThemeProvider>
        <App />
      </MuiThemeProvider>);
    expect(wrapper.find('AutoComplete').length).toEqual(1);
  });

  it('renders a <GridList /> component', () => {
    const wrapper = mount(
       <MuiThemeProvider>
        <App>
          <Candidates />
        </App>
      </MuiThemeProvider>);
    expect(wrapper.find('GridList').length).toEqual(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(
       <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('renders 3 children', () => {
    const wrapper = mount(
      <MuiThemeProvider>
          <App />
      </MuiThemeProvider>
    );
   expect(wrapper.children().length).toEqual(3);
  });

  it('state is null when constructor function is called', () => {
    const wrapper = mount(
      <MuiThemeProvider>
          <App />
      </MuiThemeProvider>
    );
   expect(wrapper.state()).toEqual(null);
  });
});
