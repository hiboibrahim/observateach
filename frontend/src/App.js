import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/Landingpage/LandingPage";
import myNotes from "./screens/myNotes/myNotes";
 
const App = () => (
        <Router>
          
      <Header />
        <main className="App">
      <Routes>
        <Route path='/' Component={LandingPage} exact />
        <Route path="/mynotes" component={() => <myNotes />} />
      </Routes>    

    </main>
    <Footer />
   
    </Router>
);
    



export default App;
