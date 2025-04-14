import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";
import { SearchProvider } from "./store/SearchContext";
function App() {
  return (
    <SearchProvider>
      <AppRoutes />
    </SearchProvider>
  );
}

export default App;
