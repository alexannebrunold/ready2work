/*eslint-disable */
import './App.css';
import Booking from './pages/booking';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';
import ClassroomMap from './pages/classroomMap';
import './style/global.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  const token = localStorage.getItem('token :')
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            {token ? <></> : <Redirect to="/connexion" />}
          </Route>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/booking">
            {token ? <Booking /> : <Redirect to="/connexion" />}
          </Route>
          <Route path="/classroomMap">
            <ClassroomMap />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
