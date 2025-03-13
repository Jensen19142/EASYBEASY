const PhylogeneticsTree = ( {link} ) => {
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <iframe 
          src={link} 
          width="100%" 
          height="100%" 
          style={{ border: "none" }}
          title="External Page"
        ></iframe>
      </div>
    );
  };
  
  export default PhylogeneticsTree;