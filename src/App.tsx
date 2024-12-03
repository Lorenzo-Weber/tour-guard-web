import { BrowserRouter } from "react-router-dom";
import RoutesFunction from "./routes/Routes";
import AppProviders from "./Hooks";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <RoutesFunction />
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
