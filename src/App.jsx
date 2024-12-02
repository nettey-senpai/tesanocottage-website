import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import GuestHouse from "./pages/GuestHouse";
import GalleryFB from "./pages/GalleryFB";
import GalleryEvents from "./pages/GalleryEvents";
import Layout from "./Layout";

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guesthouse" element={<GuestHouse />} />
        <Route path="/galleryfb" element={<GalleryFB />} />
        <Route path="/galleryevents" element={<GalleryEvents />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
