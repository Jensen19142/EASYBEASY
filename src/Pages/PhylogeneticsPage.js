import React from "react";
import PhylogeneticsTree from "../Components/PhylogeneticsTree";
import Row from "react-bootstrap/Row";

const PhylogeneticsPage = () => {
    return (
        <div>
            <h3> Phylogenetics </h3>
            <p> 
                Phylogenetics is the scientific study of the evolutionary relationships and history among organisms, genes, or proteins. It aims to reconstruct the evolutionary tree of life, illustrating how different species or molecular sequences are related to one another and tracing their common ancestry. In bioinformatics, phylogenetic trees,  which are graphical representations of the evolutionary relationships between biological sequences, are created using molecular data like DNA or protein sequences to understand evolutionary history. 
            </p>
            <h6> Phylogenetic Tree of Influenza Viruses </h6>
            <Row className="mb-3 mt-4">
                <h5> Phylogenetic Tree </h5>
                <PhylogeneticsTree />
                <p> The phylogenetic tree presented above illustrates the evolutionary relationships among the four major types of influenza viruses: Influenza A, Influenza B, Influenza C, and Influenza D. The tree is structured to reflect the evolutionary divergence of these influenza types, with Influenza A displaying the most diversity due to antigenic drift and shift, leading to periodic pandemics. The branches of the tree are positioned to highlight hierarchical relationships, with broader classifications leading to more specific subtypes.  </p>
            </Row>
        </div>
    );
};

export default PhylogeneticsPage;