import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import './App.css';
import DetailCard from './components/DetailCard';
import CategoryList from './views/CategoryList';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/materials">Materials</Link>
          </li>
          <li>
            <Link to="/monsters">Monsters</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:category/:id">
          <DetailCard />
        </Route>
        <Route path="/:category">
          <CategoryList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
