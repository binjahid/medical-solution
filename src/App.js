import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import Header from "../src/components/pages/Header/Header";
import Services from "./components/pages/Services/Services";
import AboutUS from "./components/pages/Aboutus/AboutUS";
import Signup from "./components/pages/Signup/Signup";
import Login from "./components/pages/Login/Login";
import PrivateRoute from "./hooks/PrivateRoute";
import AuthProvider from "./AuthContext/AuthProvider";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUS></AboutUS>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/service-details/:serviceid">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
