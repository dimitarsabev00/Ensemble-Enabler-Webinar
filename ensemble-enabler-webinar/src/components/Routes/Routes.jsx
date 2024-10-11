import { Route, Routes } from "react-router";
import { InnovationScreen } from "../../screens";

const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/innovation" element={<InnovationScreen />} />
      </Routes>
    </>
  );
};

export default RoutesComp;
