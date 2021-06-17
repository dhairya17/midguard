import { Button } from '@material-ui/core';
import { useAuth } from 'reactfire';

// home component i.e. shown when the user logs in 
function Home() {
    // using auth to log out
    const auth = useAuth();
    return(
        <div>
            <h1>
                You've logged in successfully 
            </h1>
            <Button variant="contained" color="primary" onClick={async () => await auth.signOut()} style={{ margin: 12 }}>
                LOGOUT
            </Button>
        </div>
    )
}

export default Home;
