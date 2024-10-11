import { Route, Routes, useLocation } from "react-router";
import { InnovationScreen } from "../../screens";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RoutesComp = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.location.href = "https://www.ensembleenabler.com/";
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/innovation" element={<InnovationScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComp;
