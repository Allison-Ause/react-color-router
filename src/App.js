import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import RGB from './components/RGB/RGB';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/60/21/24" />
        </Route>
        <Route path="/rgb/:r/:g/:b">
          <NavBar />
          <RGB />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
