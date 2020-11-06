// import { render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/**
 * Factory cuntion to create a ShallowWrapper for the App for the App component
 * @function setup
 * @returns {ShallowWrapper} 
*/

const setup = () => {
  return shallow(<App/>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders a button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe('0')
})

test('counter increments by 1 after click', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe('1')
})