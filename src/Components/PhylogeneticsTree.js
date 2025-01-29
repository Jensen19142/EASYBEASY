import React, { useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";

const treeData = {
    name: "Influenza Viruses",
    children: [
        {
            name: "Influenza A",
            children: [
                { name: "H1N1" },
                { name: "H1N2" },
                { name: "H3N2" },
                { name: "H2N2" },
                { name: "H5N1" },
                { name: "H7N2" },
                { name: "H7N3" },
                { name: "H7N7" },
                { name: "H7N9" },
                { name: "H9N2" },
                { name: "H10N7" },
            ],
        },
        {
            name: "Influenza B",
            children: [
                { name: "Victoria Lineage" },
                { name: "Yamagata Lineage" },
            ],
        },
        {
            name: "Influenza C",
        },
        {
            name: "Influenza D",
        }
    ],
};

const boxStyles = {
    border: "3px solid black",
    borderRadius: "10px",
    margin: "auto auto",  // Centers the box on the page
    width: "100vw",        // Adjust width as needed
    height: "80vh",       // Adjust height as needed
    display: "flex",      // Use flexbox to center contents
    justifyContent: "center",  // Centers horizontally
    alignItems: "center",      // Centers vertically
    backgroundColor: "#f9f9f9",
}

const containerStyles = {
    width: "100%",   // Tree takes full width of the box
    height: "100%",  // Tree takes full height of the box
}

const PhylogeneticsTree = () => {
    const treeContainerRef = useRef(null);  // Reference to the container
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1); // State the control scale of the tree 

    useEffect(() => {
        const updateTreePosition = () => {
            const containerWidth = treeContainerRef.current.offsetWidth;
            const containerHeight = treeContainerRef.current.offsetHeight;

            // Center the tree in the container
            const treeWidth = containerWidth * 0.8; // Assuming the tree takes up 80% of container width
            const treeHeight = containerHeight * 0.8; // Assuming the tree takes up 80% of container height

            const scaleX = containerWidth / treeWidth; // Scale based on width
            const scaleY = containerHeight / treeHeight; // Scale based on height

            // Use the smaller scale factor to fit both width and height
            setScale(Math.min(scaleX, scaleY));

            // Center the tree in the container 
            setTranslate({
                x: (containerWidth - treeWidth * scale) / 2 + 350,
                y: (containerHeight - treeHeight * scale) / 2 + 300,
            });
        };

        // Update tree position when window is resized
        window.addEventListener("resize", updateTreePosition);

        // Initial position update
        updateTreePosition();

        return () => {
            window.removeEventListener("resize", updateTreePosition);
        };
    }, [scale]);

    return (
        <div style={boxStyles}>
            <div ref={treeContainerRef} style={containerStyles}>
                <Tree
                    data={treeData}
                    orientation="horizontal"
                    translate={translate}  // Use translate to center the tree
                    scale={scale} // Apply the scale to the tree
                />
            </div>
        </div>
    );
};

export default PhylogeneticsTree;