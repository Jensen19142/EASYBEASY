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
    const [descriptionName, setDescriptionName] = useState("influenza A(H1N1) neuraminidase in complex with Oseltamivir")

    return (
        <div>
            <h3> Protein Structure Visualization </h3>
            <p> 
                Protein Structure Visualization refers to the use of computer graphics programs to view, analyze, and manipulate both the 3D and 2D structures of proteins to better understand their physical and functional properties. Bioinformaticians and computational biologists use specialized software and tools to render atomic-level details of proteins, including the arrangement of amino acid residues, secondary structures (such as alpha-helices and beta-sheets), and their interactions with other molecules, such as ligands or DNA. These visualizations provide critical insights into molecular interactions, functions, and mechanisms, which are essential for advancing research in areas such as drug discovery, genomics, and structural biology.
            </p>

            <Row className="mb-3 mt-4">
                <h6> {structureName} </h6>
                <Col xs lg={6} className="mt-5 mb-3">
                    <h5> 3D Molecular Viewer </h5>
                    <MolstarView pdbid={pdbid} />
                    <p>
                        The 3D Molecular Viewer can be re-rendered to display a 3D structure of the selected protein in complex with the selected ligand, allowing users to view their chosen 3D protein-ligand complex structure. This figure shows the 3D structure of the {descriptionName}.
                    </p>
                </Col>

                <Col xs lg={6} className="mt-5 mb-3">
                    <h5> 2D Protein-Ligand Interaction Map </h5>
                    <LigandView pdbid={pdbid} pdbResID={pdbResID} pdbChainID={pdbChainID} />
                    <p>
                        The 2D Protein-Ligand Interaction Map can be re-rendered to display a 2D interaction map of the selected protein in complex with the selected ligand. By hovering over the dotted lines connecting each amino acid residue of the protein with each atom of the ligand, the interaction map would display the type of chemical bonds formed and the angstrom distance of these bonds. This figure shows the 2D interaction map of the {descriptionName}.
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default ProteinStructureVisualizationPage;