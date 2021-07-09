import Home from './Home';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  const about="welcome to advice app"
  return (
    <Router>
    <div className="App">

      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/' exact>
          <Home />
          </Route>
          <Route path='/create'>
          <Create />
          </Route>
          <Route path='/blogs/:id'>
          <BlogDetails />
          </Route>
          <Route path='*'>
          <NotFound />
          </Route>
        </Switch>
      
      </div>
     
    </div>
    </Router>
  );
}

export default App;
