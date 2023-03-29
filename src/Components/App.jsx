
import { Routes, Route } from "react-router-dom";
import Header from "../Pages/Main_page/Header";
import MainPage from "./Main";
import Comic from "./MainComic";
import Footer from "../Pages/Main_page/Footer";
import MarcaMatriz from "./MainMarcaMatriz";






function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/comic" element={<Comic />} />
      <Route path="/MarcaMatriz" element={<MarcaMatriz />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;