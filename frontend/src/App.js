import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/Landingpage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import myNotes from "./screens/myNotes/myNotes";
import { useState } from "react";

 
function App() {
    const [search, setSearch] = useState("");
  
    return (
        <Router>
      <Header setSearch={(s) => setSearch(s)} />
        <main className="App">
            <Routes>
        <Route path='/' Component={LandingPage} exact />
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
    </Routes>

    </main>
    <Footer />

    </Router>
);
    
}


export default App;
