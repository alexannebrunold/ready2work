/*eslint-disable */
import './App.css'
import Booking from './pages/booking'
import Connexion from './pages/connexion'
import Inscription from './pages/inscription'
import TeacherDashboard from './pages/teacherDashboard'
import ClassroomMap from './pages/classroomMap'
import './style/global.scss'
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
            <Connexion />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/booking">
            {token ? <Booking token={token}/> : <Redirect to="/" />}
          </Route>
          <Route path="/teacherDashboard">
          {token ? <TeacherDashboard token={token}/> : <Redirect to="/" />}
          </Route>
          <Route path="/classroomMap">
           {token ? <ClassroomMap /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
