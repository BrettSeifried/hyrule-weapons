import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('test click Materials goes to Materials page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const title = screen.getByRole('heading', {
    name: /choose what you want to learn about/i,
  });
  expect(title).toBeInTheDocument();

  const matLink = screen.getByRole('link', {
    name: /materials materials/i,
  });
  expect(matLink).toBeInTheDocument();

  const clickLink = screen.getByRole('img', {
    name: /materials/i,
  });
  userEvent.click(clickLink);

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i), { timeout: 7000 });
  // screen.debug();
  const matDetails = screen.getAllByLabelText('list-item');
  expect(matDetails.length).toBe(36);
});
