import React from "react";

const MolstarView = ({ pdbid }) => {
    return (
        <div id="myViewer">
            <pdbe-molstar 
                molecule-id={pdbid} 
                hide-controls="true"
            ></pdbe-molstar>
        </div>
    );
};

export default MolstarView;