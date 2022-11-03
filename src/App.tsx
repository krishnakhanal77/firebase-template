import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Function from "./pages/Function";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/function" element={<Function />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
