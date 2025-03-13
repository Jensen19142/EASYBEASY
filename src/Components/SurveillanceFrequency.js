const SurveillanceFrequency = () => {
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <iframe 
            src="https://epicovcharts.bii.a-star.edu.sg/flu-freq-dashboard/"          
            width="100%" 
          height="100%" 
          style={{ border: "none" }}
          title="External Page"
        ></iframe>
      </div>
    );
  };
  
  export default SurveillanceFrequency;