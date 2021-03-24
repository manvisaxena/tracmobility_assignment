
import { shallowEqual } from 'react-redux';
import App from './App';

it("renders without crashing", () => {
  shallowEqual(<App />);
});
