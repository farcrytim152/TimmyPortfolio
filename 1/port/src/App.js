import './App.css';
import './components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Activities from './pages/Activities';
import Edu from './pages/Edu';

function App() {
  return (  
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/edu" component={Edu} />
          <Route path="/activities" component={Activities} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
