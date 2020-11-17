import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/create"/>
        <Show path="/show/:id"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
