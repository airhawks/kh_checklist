import { StrictMode } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/public-sans";

import { ThemeProvider } from "@mui/system";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import App from "./App";
import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwKnWWyWHPOYwehaL-paX7KPOLHdomH6s",
  authDomain: "kh-curtains.firebaseapp.com",
  projectId: "kh-curtains",
  storageBucket: "kh-curtains.appspot.com",
  messagingSenderId: "88547459846",
  appId: "1:88547459846:web:99c15fd9dfa6c44ef19487",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      console.error(error.message, error);
    });
};

function AuthWrapper({ children }) {
  const [user, setUser] = React.useState(null);
  const [loginDetails, setLoginDetails] = React.useState({});

  const updateLoginDetails = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  React.useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      }),
    []
  );

  if (!user) {
    return (
      <Box
        sx={{
          p: 4,
        }}
      >
        <TextField
          sx={{
            my: 2,
          }}
          label={"Username"}
          variant="outlined"
          fullWidth
          onChange={(e) => updateLoginDetails("email", e.target.value)}
        />
        <TextField
          sx={{
            mb: 2,
          }}
          label={"Password"}
          variant="outlined"
          type="password"
          fullWidth
          onChange={(e) => updateLoginDetails("password", e.target.value)}
        />

        <Button
          variant="outlined"
          onClick={() => loginUser(loginDetails.email, loginDetails.password)}
        >
          Login
        </Button>
      </Box>
    );
  }
  return children;
}

const persistor = persistStore(store);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthWrapper>
            <App />
          </AuthWrapper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
