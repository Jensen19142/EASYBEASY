import React, { useState } from "react";
import MolstarView from "../Components/MolstarViewer";
import LigandView from "../Components/LigandViewer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProteinStructureVisualizationPage = () => {
    const [pdbid, setPDBID] = useState("3ti6");
    const [pdbResID, setPDBResID] = useState("801");
    const [pdbChainID, setPDBChainID] = useState("A");
    const [structureName, setStructureName] = useState("Crystal structure of 2009 pandemic H1N1 neuraminidase complexed with oseltamivir")

    return (
        <div>
            <h3> Protein Structure Visualization </h3>
            <Row className="mb-3 mt-4">
                <h6> {structureName} </h6>
                <Col xs lg={6} className="mt-5 mb-3">
                <h5> 3D Molecular Viewer </h5>
                <MolstarView pdbid={pdbid} />
                </Col>
                <Col xs lg={6} className="mt-5 mb-3">
                <h5> 2D Protein-Ligand Interaction Map </h5>
                <LigandView pdbid={pdbid} pdbResID={pdbResID} pdbChainID={pdbChainID} />
                </Col>
            </Row>
        </div>
    );
};

export default ProteinStructureVisualizationPage;