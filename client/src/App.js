import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResumeBuilderForm from "./pages/ResumeBuilderForm";
import Preview from "./pages/Preview";
<<<<<<< Updated upstream
=======
import UserForm from "./pages/UserForm";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <Route path="/resumebuilder" component={ResumeBuilderForm} />
=======
          {/* <Route path="/resumebuilder" component={ResumeBuilderForm} /> */}
          <Route path="/userform" component={UserForm} />
>>>>>>> Stashed changes
          <Route path="/preview" component={Preview} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
