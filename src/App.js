import classes from './App.module.css'
import UserContext from './USER/UserContext';
import { useContext } from 'react';
import NavBar from './components/navBar';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import WelcomePage from './components/welcomePage';
import Login from './components/login';
import SignUp from './components/signUp';

function App() {
  const userCtx = useContext(UserContext)
  const loggedIn = userCtx.users.loggedIn

  return (
   <BrowserRouter>
      <div className={classes.container}>
        {/* {loggedIn ? <>
          <Header />
          <NavBar />
        </> :
          <WelcomePage/>
        } */}
        <Header />
        <NavBar />
      </div>
   </BrowserRouter>
  );
}

export default App;
