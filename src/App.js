import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./LayoutComponents/Layout";
import About from "./Pages/About";
import 'reactjs-popup/dist/index.css';
import Contact from "./Pages/Contact";
import DavidRaysDampproofingPage from "./Pages/Projects/DavidRaysDampproofingPage";
import SectionInsightsPage from "./Pages/Projects/SectionInsightsPage";
import FearlessCmdfPage from "./Pages/Projects/FearlessCmdfPage";
import BCWhalesIncidentReporterPage from "./Pages/Projects/BCWhalesIncidentReporterPage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<About/>}/>
                      <Route path="contact-me" element={<Contact/>}/>
                      <Route path="projects/david-rays-damproofing-website" element={<DavidRaysDampproofingPage/>}/>
                      <Route path="projects/sections-insight-term-project" element={<SectionInsightsPage/>}/>
                      <Route path="projects/bcwhales-incident-reporter-app" element={<BCWhalesIncidentReporterPage/>}/>
                      <Route path="projects/fearless-cmdf-hackathon-project" element={<FearlessCmdfPage/>}/>
                      <Route
                          path="*"
                          element={<PageNotFound />}
                      />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
);
}
export default App;
