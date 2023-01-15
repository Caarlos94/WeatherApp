import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import CityDetail from './components/CityDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/about"} component={About} />
      <Route path={"/detail/:nombre"} component={CityDetail} />
    </div>
  );
}

export default App;