/*eslint-disable */
import './App.css';
// import Booking from './pages/booking';
// import Connexion from './pages/connexion';
// import Inscription from './pages/inscription';
// import StudentDashboard from './pages/studentDashboard';
import './style/global.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";
import TeacherDasboard from './pages/teacherDashboard'

function App() {
  const token = localStorage.getItem('token :')
  return (
    <TeacherDasboard />
    /*<div className="App">

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
          <Route path="/studentDashboard">
            <StudentDashboard />
          </Route>
        </Switch>
      </Router>
    </div>*/
  )
}

export default App
