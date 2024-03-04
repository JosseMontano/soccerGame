import Auth from "./app/auth";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./app/dashboard/home";
import TeamsDash from "./app/dashboard/teams";
import Home from "./app/start";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route path="/dashboard/home" Component={HomeDashboard} />
        <Route path="/dashboard/equipos" Component={TeamsDash} />
      </Routes>
    </HashRouter>
  );
}

export default App;
