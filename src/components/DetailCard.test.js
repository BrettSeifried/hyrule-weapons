import { render } from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { mockMatDetail } from '../__mocks__/mocks';
import DetailCard from './DetailCard';

test('Materials Detail page renders name, image, description, effect, hearts', async () => {
  render(
    <MemoryRouter initialEntries={['/materials/182']}>
      <Route>
        <DetailCard matDetail={mockMatDetail} />
      </Route>
    </MemoryRouter>
  );

  const name = screen.getByRole('heading', {
    name: /rushroom/i,
  });
  expect(name).toBeInTheDocument();
});
