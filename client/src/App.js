import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResumeBuilderForm from "./pages/ResumeBuilderForm";
import Login from "./pages/Login";


// const initialFormState = {
//   fName: "",
//   email: "",
//   phone: "",
//   address: "",
// }

// const formValidation = Yup.object().shape({
//   fName: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   phone: Yup.number().integer().typeError('Invalid phone number').required('Required'),
//   address: Yup.string().required('Required'),
// })


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resumebuilder" component={ResumeBuilderForm} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
