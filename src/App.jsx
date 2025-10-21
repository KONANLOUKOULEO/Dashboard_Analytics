import LayoutComponent from "./Layout/LayoutComponent";
import { Route, Routes } from "react-router";
import Connexion from "./Pages/Connexion/index";
import Dashboard from "./Pages/Dasboard/index"
import ExportContent from "./Pages/Export/index"
import Produits from "./Pages/Produits/index"
import Utilisateurs from "./Pages/Utilisateurs/index"
import Ventes from "./Pages/Ventes/index"

export default function App() {

  return (
    <div className="text-center text-2xl font-semibold h-screen">
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route element={<LayoutComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/export" element={<ExportContent />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/ventes" element={<Ventes />} />
        </Route>
      </Routes>
    </div>
  );
}
