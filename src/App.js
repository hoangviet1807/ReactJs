import './App.css';
import {BrowserRouter as Router , Route, Switch,  } from 'react-router-dom';
import Navbar from './component/Nav/Navbar';
import Home from './pages/Home';
import Items from './pages/Items';
import clothing from './pages/Clothing'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/allitems' component={Items}/>
          <Route path='/clothing' component={clothing}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
