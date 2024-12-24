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
            <p> 
                With the help of various bioinformatics tools, bioinformaticians and computational biologists can visualize both the 2D and 3D structures of complex biological molecules, such as proteins and nucleic acids. These visualizations provide critical insights into molecular interactions, functions, and mechanisms, which are essential for advancing research in areas such as drug discovery, genomics, and structural biology. 
                <br />
                <br/>
                    
                In this section, two featured visualization tools are featured: the 3D Molecular Viewer and the 2D Protein-Ligand Interaction Map. These tools represent just a fraction of the many resources researchers use to explore and analyze protein structures. 
                <br />
                <br />
                In the default example, both the 3D Molecular Viewer and the 2D Protein-Ligand Interaction Map showcases the 2009 pandemic H1N1 neuraminidase in complex with the oseltamivir drug in both 3D and 2D. 
            </p>
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