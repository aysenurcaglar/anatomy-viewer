import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ModelLayout } from "./components/ModelLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model/:modelId" element={<ModelLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
