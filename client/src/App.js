import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Preview from "./pages/Preview";
import Collar from "./pages/Collar";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState(true);
  
  return (
    
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/resumebuilder" component={ResumeBuilderForm} /> */}
          {/* <Route path="/userform" component={UserForm} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/preview/:id" component={Preview} />
          {/* all routes that explicitly defined will be sent to the 404 page */}
          {/* <Route path="*" component={NotFound} /> */}
          {/* Protected route to authenticate the user before using the form  */}
          <Route path="/collar" component={Collar} />
          <ProtectedRoute path="/userform" component={UserForm} isAuth={isAuth}/>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
