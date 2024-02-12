import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./style";

const App = () => (
  <div className="w-fulll overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <Hero />
    </div>
  </div>
);

export default App;
