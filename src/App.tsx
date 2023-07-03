import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BeerDetails from "./pages/Beer";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:beerId" element={<BeerDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
