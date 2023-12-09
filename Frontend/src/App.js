import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// import Chat from './chat/pages/Chat';
import Messenger from './messanger/pages/messenger';
import Intern from './intern/InternApp';
import Success from './intern/success';
import InternReq from './intern/internReq';
import { ContactUs } from './email/contactForm';
import EmailSend from './email/emailSend';
import InternAcc from './intern/InternAcc'; 
import InternAccForm from './intern/InternAccForm';

import Home2 from './Home2';
import About from './about/About';
import Footer from './shared/components/footer/Footer';
import Users from './user/pages/Users';
import Newses from './newses/pages/Newses';
import NewNews from './newses/pages/NewNews';
import ShowNews from './newses/pages/ShowNews';
import EditNews from './newses/pages/EditNews';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);


  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
      <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="/emailsend" exact>
          <EmailSend />
        </Route>
        <Route path="/email/:eid" exact>
          <ContactUs />
        </Route>
        <Route path="/internreq" exact>
          <InternReq />
        </Route>
        <Route path="/intern" exact>
          <Intern />
          </Route>
        <Route path="/internacc" exact>
          <InternAcc />
        </Route>
        <Route path="/internaccform/:addid" exact>
          <InternAccForm />
        </Route>
      <Route path="/messenger" exact>
          <Messenger />
        </Route>
      <Route path="/" exact>
          <Home2 />
        </Route>
        <Route path="/messenger" exact>
          <Messenger />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route path="/newses" exact>
          <Newses />
        </Route>
        <Route path="/newses/new" exact>
          <NewNews />
        </Route>
        <Route path="/newses/:id" exact>
          <ShowNews />
        </Route>
        <Route path="/newses/:id/edit" exact>
          <EditNews />
        </Route>
        

        <Redirect to="/" />
      </Switch>
    );    
  } else {
    routes = (
      <Switch>
      <Route path="/" exact>
          <Home2 />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="/emailsend" exact>
          <EmailSend />
        </Route>
        <Route path="/email/:eid" exact>
          <ContactUs />
        </Route>
        <Route path="/internreq" exact>
          <InternReq />
        </Route>
        <Route path="/intern" exact>
          <Intern />
        </Route>
        <Route path="/internacc" exact>
          <InternAcc />
        </Route>
        <Route path="/internaccform/:addid" exact>
          <InternAccForm />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/newses" exact>
          <Newses />
        </Route>
        <Route path="/newses/:id" exact>
          <ShowNews />
        </Route>

        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId:userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
