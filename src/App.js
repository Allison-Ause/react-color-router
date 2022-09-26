import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Chocolate from './components/Chocolate/Chocolate';

function App() {
  return (
    <main>
      <div className="navbar">
        <NavLink to="/rgb/60/21/24">Chocolate</NavLink>
        <NavLink to="/rgb/105/20/14">Chestnut</NavLink>
        <NavLink to="/rgb/164/66/0">Gingersnap</NavLink>
      </div>
      <Switch>
        <Route path="/rgb/60/21/24" component={Chocolate} />
        {/* <Route path="/rgb/105/20/14" />
        <Route path="/rgb/164/66/0" />
        TODO: ADD 404 NOT FOUND ROUTE path="*"
        */}
      </Switch>
    </main>
  );
}

export default App;
