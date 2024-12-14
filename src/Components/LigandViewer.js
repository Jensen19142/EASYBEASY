import React from "react";

const LigandView = ({ pdbid, pdbResID, pdbChainID }) => {
    return (
        <div id="ligandViewer">
            <pdb-ligand-env 
                id="int-component"
                pdb-id={pdbid}
                pdb-res-id={pdbResID}
                pdb-chain-id={pdbChainID}
                environment="production"
                zoom-on
                ></pdb-ligand-env>
        </div>
    );
};

export default LigandView;