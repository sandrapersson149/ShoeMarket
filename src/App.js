import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './Components/About/About';
import Landing from './Components/Landing/Landing';
import Service from './Components/Service/Service';
import Men from './Components/Shop/Man';
import Woman from './Components/Shop/Woman';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/service' component={Service}></Route>
          <Route path='/men' component={Men}></Route>
          <Route path='/woman' component={Woman}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/' component={Landing}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;