import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Deck from "./pages/Deck";
import Musiques from "./pages/Musiques";
import Destinations from "./pages/Destinations";
// Page2

// Page3

// Page4

// Page5

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
          {/* Page 1 */}
          <Route path="/" element={<Home />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/musique" element={<Musiques />} />
          <Route path="/destinations" element={<Destinations />} />

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
