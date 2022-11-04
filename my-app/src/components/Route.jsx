
import Home from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import Header from "./Header";
import Footer from "./Footer";
import Error404 from "../pages/Error";
import Location from "../pages/location";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function getRoutes () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/erreur404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}
export default getRoutes;