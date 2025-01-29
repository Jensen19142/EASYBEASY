import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import style from "./App.module.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Welcome from "./Pages/WelcomePage";
import ProteinStructureVisualizationPage from "./Pages/ProteinStructureVisualization";
import DNAAnalysisPage from "./Pages/DNAAnalysisPage";
import PhylogeneticsPage from "./Pages/PhylogeneticsPage";
import AboutPage from "./Pages/AboutPage";
import CellularImageAnalysisPage from "./Pages/CellularImageAnalysis";
import InfectiousDiseaseSurveillance from "./Pages/Surveillance";

function App() {

  return (
    <Router>
      <div>
        <Header />

        <Container className={style.container}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/proteinstructurevisualization" element={<ProteinStructureVisualizationPage />} />
            <Route path="/dnasequenceanalysis" element={<DNAAnalysisPage />} />
            <Route path="/phylogenetics" element={<PhylogeneticsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cellularimageanalysis" element={<CellularImageAnalysisPage />} />
            <Route path="/surveillance" element={<InfectiousDiseaseSurveillance />} /> 
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
