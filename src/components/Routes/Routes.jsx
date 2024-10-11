import { Route, Routes, useLocation } from "react-router";
import {
  AIScreen,
  InnovationScreen,
  PerformanceScreen,
  TalentScreen,
} from "../../screens";
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
        <Route path="/performance" element={<PerformanceScreen />} />
        <Route path="/talent" element={<TalentScreen />} />
        <Route path="/ai" element={<AIScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComp;
