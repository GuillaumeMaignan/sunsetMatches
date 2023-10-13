import "./App.css";
import NavBar from "./component/Navbar";
import Video from "./component/Video";
import Contact from "./component/ContactUs";
import Concept from "./component/Concept";
import Activities from "./component/Activities";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <Concept />
      <Feature />
      <Activities />
      <Footer />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
