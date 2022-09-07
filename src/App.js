// import logo from './logo.svg';
import './asset/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePages from './pages/HomePages';
import Detail from './pages/Detail';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import NotFound from 'pages/NotFound';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/categories/:idc" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
