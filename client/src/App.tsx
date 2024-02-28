import Auth from "./app/auth";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./app/dashboard/home";
import Home from "./app/start";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route path="/dashboard/home" Component={HomeDashboard} />
      </Routes>
    </HashRouter>
  );
}

export default App;
