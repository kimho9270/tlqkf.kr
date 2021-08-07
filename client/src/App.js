
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from './components/MainPage/MainPage';
import AuthIcon from './components/RegisterPage/AuthIcon';
import Search from './components/SearchPage/SearchPage';


function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/auth_icon' component={AuthIcon}/>
          <Route exact path='/search/:String' component={Search}/>


        </Switch>

      


    </Router>
  )
}

export default App;
