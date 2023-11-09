import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Gallery from "./component/Gallery";
import Homepage from "./pages/Homepage";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Review from "./component/Review";
import ContactMap from "./component/ContactMap";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SharedLayout />}>
    //       <Route index element={<Homepage/>} />
    //       <Route path="/gallery" element={<Gallery/>}></Route>
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Homepage />}> */}
            {/* <Route path="/service" element={<Home/>} />
            <Route path="/project" element={<About/>} />
            <Route path="/contact" element={<Services/>} />
            <Route path="/contact" element={<Projects/>} />
            <Route path="/contact" element={<Review/> }/>
            <Route path="/contact" element={<ContactMap/>} /> */}
          {/* </Route> */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
