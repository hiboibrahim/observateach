import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/Landingpage/LandingPage";
import MyNotes from "./screens/myNotes/myNotes.js";
import { useState } from "react";


function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Routes>

          <Route path="/" Component={LandingPage} exact />
          {/* <Route path="/mynotes" Component= {MyNotes }/> */}
          <Route path="/mynotes" exact element = {<MyNotes search={search}/> }/>
        </Routes>
      
      </main>
      <Footer />
    </Router>
  );
}


export default App;
