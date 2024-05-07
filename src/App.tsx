import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonDetail, PokemonList } from './pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route exact path="/detail/:id">
          <PokemonDetail />
        </Route>
        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
};
