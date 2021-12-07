import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sayfalar from "./Sayfalar";
import Standart from "./Standart";
import Deneme from "./Deneme";
import BirKismi from "./BirKismi";
import BaskaKismi from "./BaskaKismi";
import Sehir from "./Sehir";
import Vancouver from "./Vancouver";
import Sinop from "./Sinop";


function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="Sehirler" element={<Sehir />} /> 
                    <Route path="Vancouver" element={<Vancouver />} />
                    <Route path="Sinop" element={<Sinop />} /> 
                    <Route path="Sayfalar" element={<Sayfalar />} /> 
                    <Route path="BirKısmı" element={<BirKismi />} /> 
                    <Route path="BaskaKısmı" element={<BaskaKismi />} /> 
                    <Route path="Standart" element={<Standart />} /> 
                    <Route path="Deneme" element={<Deneme />} /> 
            </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default Router;