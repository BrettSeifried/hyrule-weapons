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
          <Link to="/">Home</Link>
          {/* <Link to="/equipment">Equipment</Link> */}
          <Link to="/materials">Materials</Link>
          <Link to="/monsters">Monsters</Link>
          {/* <Link to="/treasure">Treasure</Link> */}
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
