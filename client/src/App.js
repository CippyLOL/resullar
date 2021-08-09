import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResumeBuilderForm from "./pages/ResumeBuilderForm";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resumebuilder" component={ResumeBuilderForm} />
          <Route path="/login" component={Login} />
          <Route path="/userform" component={UserForm} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
