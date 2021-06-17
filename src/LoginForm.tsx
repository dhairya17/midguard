import './App.css';
import { Grid, Button, TextField } from '@material-ui/core';
import 'firebase/firestore'; 
import 'firebase/auth';
import { useAuth} from 'reactfire';

// login form component to hold the login form and to check if the credentials are okay 
function LoginForm() {
    // to retrieve data from firebase and check
    const auth = useAuth();
    const CheckCredentials = async (event) => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            auth.signInWithEmailAndPassword(email.value, password.value)
        } catch(e) {
            alert('Some error occured, please try again later.');
        }
    }
    return(
        <div className="form-container">
            <div>
            <form onSubmit={CheckCredentials}>
                {/* email input  */}
                <Grid container spacing={2} justify="center">
                    <Grid item xs={2}>
                    <TextField id='email' label="Email" variant="outlined" name="email"/>
                    </Grid>
                </Grid>
                {/* password input  */}
                <Grid container spacing={2} justify="center">
                    <Grid item xs={2}>
                    <TextField id='password' label="Password" variant="outlined" name="password"/>
                    </Grid>
                </Grid>
                {/* submit button  */}
                <Grid container spacing={3} justify="center">
                    <Grid item xs={1}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    </Grid>
                </Grid>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;
