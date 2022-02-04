import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { mockMonsterList } from '../__mocks__/mocks';
import ListCard from './listInfo';

test('List card renders monsters: images, name, Link', async () => {
  render(
    <MemoryRouter initialEntries={['/monsters']}>
      <Route to="/monsters">
        <ListCard list={mockMonsterList} />
      </Route>
    </MemoryRouter>
  );

  const name = screen.getByText(/black moblin/i);
  expect(name).toBeInTheDocument();

  const image = screen.getByAltText(/black moblin/i);
  expect(image).toBeInTheDocument();

  const link = screen.getByRole('link', { name: /black moblin/i });
  expect(link).toBeInTheDocument();
});
