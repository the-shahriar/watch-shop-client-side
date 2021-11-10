import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;