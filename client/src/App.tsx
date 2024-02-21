import Auth from "./app/auth";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Auth} />
      </Routes>
    </HashRouter>
  );
}

export default App;
