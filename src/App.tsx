import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Function from "./pages/Function";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Authentication />} />
          <Route path="/function" element={<Function />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
