import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import RGB from './components/RGB/RGB';

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        {/* TODO: ADD 404 NOT FOUND ROUTE path="*" */}
      </Switch>
    </main>
  );
}

export default App;
