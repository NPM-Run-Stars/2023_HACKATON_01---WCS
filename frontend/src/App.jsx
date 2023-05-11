import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chill from "@pages/Chill";
import Culture from "@pages/Culture";
import Actif from "@pages/Actif";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Deck from "./pages/Deck";
import Musiques from "./pages/Musiques";
import Festif from "./pages/Festif";
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
          <Route path="/festif" element={<Festif />} />
          <Route path="/actif" element={<Actif />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/chill" element={<Chill />} />

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
