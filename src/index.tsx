import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import env from "react-dotenv";

// firebase configuration for the app midguard 
const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: "midguard-b2ae1.firebaseapp.com",
  projectId: env.PROJECT_ID,
  storageBucket: "midguard-b2ae1.appspot.com",
  messagingSenderId: "857804867045",
  appId: env.APP_ID
};
 
// for testing purpose using emulator
// const  app = firebase.initializeApp(firebaseConfig);
// app.auth().useEmulator('http://localhost:9099/')
// app.firestore().useEmulator('localhost', 8080);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
