import React, { useState } from "react";
import PhylogeneticsTree from "../Components/PhylogeneticsTree";
import Row from "react-bootstrap/Row";

const PhylogeneticsPage = () => {
    const [link, setLink] = useState("https://phylodynamics2.pandemicprepardness.org/H1N1/Global");
    
    return (
        <div>
            <h3> Phylodynamics </h3>
            <p> 
                Phylodynamics is a field that integrates evolutionary biology and epidemiology to study how infectious diseases spread and evolve, analyzing pathogen genomes and transmission dynamics to infer epidemiological parameters. Phylodynamics combines phylogenetic analysis (studying evolutionary relationships) with population dynamics (studying how populations change over time) to understand the emergence, spread, and evolution of pathogens. It aims to infer epidemiological parameters (like transmission rates, growth rates, and the time to the most recent common ancestor) from pathogen genome sequences and their sampling times. For instance, Phylodynamic studies have been used to understand the origins and spread of various pathogens, including viruses like SARS-CoV-2 and influenza.
            </p>
            <Row className="mb-3 mt-4">
                <h5> Phylodynamics of Influenza Virus H1N1 across the Globe </h5>
                <PhylogeneticsTree 
                    link={link}
                    />
            </Row>
        </div>
    );
};

export default PhylogeneticsPage;