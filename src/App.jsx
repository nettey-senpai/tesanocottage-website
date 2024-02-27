import { HashRouter as Router, Routes, Route } from "react-router-dom";
import  Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Restaurant from "./pages/Restaurant"
import Gallery from "./pages/Gallery"
import Events from "./pages/Events"
import Contact from "./pages/Contact"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/restaurant" element={<Restaurant/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
);

export default App;
