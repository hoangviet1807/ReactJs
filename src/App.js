import './App.css';
import {BrowserRouter as Router , Route, Switch,  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Report from './pages/Report';
import Product from './pages/Product'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Report}/>
          <Route path='/products' component={Product}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
