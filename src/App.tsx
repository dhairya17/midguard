import './App.css';
import { Typography, AppBar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AuthCheck, useAuth } from 'reactfire';
import { Suspense } from 'react';
import 'firebase/firestore'; 
import LoginForm from './LoginForm';
import Home from './Home';

// styles for the material components 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    AppBar: {
      padding: "20px",
    }
  })
);

// main app component of the react project 
function App() {
  
  // initializing the app for styling and auth
  const classes = useStyles();
  const auth = useAuth();

  return (
    <div>
      <AppBar position="relative" className={classes.AppBar}>
        <Typography>
          Login
        </Typography>
      </AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        {/* check if the user is logged in and if so show the home component  */}
        <AuthCheck fallback={ <LoginForm /> } auth={auth}  >
          <Home />
        </AuthCheck>
      </Suspense>
    </div>
  );
}

export default App;
