import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import store from './services/store';

test('render learn react link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const linkElement = screen.getByText(/Welcome to mebid/i);
expect(linkElement).toBeInTheDocument();
});


