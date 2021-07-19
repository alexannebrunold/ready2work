import './App.css';
import Booking from './pages/booking';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription'
import StudentDashboard from './pages/studentDashboard';
import './style/global.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentHeader from './composants/studentHeader';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/studentDashboard">
            <StudentDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
