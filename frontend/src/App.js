import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/Landingpage/LandingPage";


const App = () => (
    <>
    <Header />
    <main style={{minHeight: "93vh"}}>
        <LandingPage />
        </main>
    <Footer />

    </>
);


export default App;
