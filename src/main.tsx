import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ErrorFallbackUI, PageLoadingSpinner } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
    // future={{
    //   v7_startTransition: true,
    // }}
    >
      <Provider store={store}>
        <PersistGate loading={<PageLoadingSpinner />} persistor={persistor}>
          <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
            <App />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
