import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;