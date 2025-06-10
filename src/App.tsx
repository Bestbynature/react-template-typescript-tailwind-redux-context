import { ModalProvider } from "./contexts/modal-contexts/modal-provider";
import { ThemeProvider } from "./contexts/theme-contexts/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/app-routes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ThemeProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </ThemeProvider>
      <ToastContainer pauseOnHover />
    </div>
  );
};

export default App;
