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

import ThankYou from "../../screens/Confirmations/ThankYou";
import Confirmation from "../../screens/Confirmations/Confirmation";

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
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/thank-you" element={<ThankYou/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComp;
