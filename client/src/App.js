import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/create"/>
      </Router>
    </div>
  );
}

export default App;
