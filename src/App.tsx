import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageRoutes from "./routes/PageRoutes";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PageRoutes />;
    </QueryClientProvider>
  );
}

export default App;
