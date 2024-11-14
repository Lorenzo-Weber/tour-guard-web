import { BrowserRouter } from "react-router-dom";
import RoutesFunction from "./routes/Routes";
import AppProviders from "./Hooks";

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
