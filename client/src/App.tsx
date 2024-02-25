import Auth from "./app/auth";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./app/dashboard/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Auth} />
        <Route path="/dashboard/home" Component={HomeDashboard} />
      </Routes>
    </HashRouter>
  );
}

export default App;
