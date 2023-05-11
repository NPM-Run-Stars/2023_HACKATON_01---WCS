import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Deck from "./pages/Deck";
// Page2

// Page3

// Page4

// Page5

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
          {/* Page 1 */}
          <Route path="/" element={<Home />} />
          <Route path="/deck" element={<Deck />} />

          {/* Page 2 */}

          {/* Page 3 */}

          {/* Page 4 */}

          {/* Page 5 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
