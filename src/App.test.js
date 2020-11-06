// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without error', () => {
  const wrapper = shallow(<App/>)
  const appComponent = wrapper.find('[data-test="component-app"]')
  expect(appComponent.length).toBe(1)
})

test('renders a button', () => {

})

test('renders counter display', () => {

})

test('counter starts at 0', () => {

})

test('counter increments by 1 after click', () => {

})