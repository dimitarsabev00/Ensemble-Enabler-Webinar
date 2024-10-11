import { Route, Routes, useLocation } from "react-router";
import { InnovationScreen } from "../../screens";
import { useEffect } from "react";

const RoutesComp = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.location.href = "https://www.ensembleenabler.com/";
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/innovation" element={<InnovationScreen />} />
      </Routes>
    </>
  );
};

export default RoutesComp;
