import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/products">
        <ExploreProducts></ExploreProducts>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>
    </Router>
  );
}

export default App;