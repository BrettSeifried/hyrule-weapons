import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DetailCard from './DetailCard';

test('Materials Detail page renders name, image, description, effect, hearts', async () => {
  render(
    <MemoryRouter initialEntries={['/materials/182']}>
      <Route path="/:category/:id">
        <DetailCard />
      </Route>
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i), { timeout: 7000 });

  const name = screen.getByRole('heading', {
    name: /rushroom/i,
  });
  expect(name).toBeInTheDocument();

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();

  const descrip = screen.getByText(
    /description: a mushroom that can grow almost anywhere but prefers ceilings and sheer cliffs\. cook it before eating to temporarily increase your movement speed\./i
  );
  expect(descrip).toBeInTheDocument();

  const effect = screen.getByText(/effect: speed up/i);
  expect(effect).toBeInTheDocument();

  const hearts = screen.getByText(/hearts: 0\.5/i);
  expect(hearts).toBeInTheDocument();
});
