import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Home page displays an image', async () => {
  render(
    <MemoryRouter>
      <Home />
      );
    </MemoryRouter>
  );

  const altText = screen.getByAltText(/materials/i);
  expect(altText).toBeInTheDocument();

  const image = screen.getByRole('img', {
    name: /materials/i,
  });
  expect(image).toBeInTheDocument();

  const title = screen.getByRole('heading', {
    name: /choose what you want to learn about/i,
  });
  expect(title).toBeInTheDocument();
});
