import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
    <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      {(auth.userId === '63bd8ebff0670624483b3e2a') && (
        <li>
        <NavLink to="/internReq" exact>
          INTERNS
        </NavLink>
      </li>

      )}
      
      <li>
        <NavLink to="/users" exact>
          PROJECTS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={"/messenger"}>CHAT</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/newses" exact>
          NOTICES
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact>
          ABOUT US
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PROJECTS</NavLink>
        </li>
      )}
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PROJECT</NavLink>
        </li>
      )} */}
      
      {/* {(auth.userId === '63a2c3c6eff87d140c269a3f') && (
        <li>
          <NavLink to="/newses/new">ADD NOTICE</NavLink>
        </li>
      )} */}


      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
