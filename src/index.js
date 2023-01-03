import { StrictMode } from "react";
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

const persistor = persistStore(store);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
