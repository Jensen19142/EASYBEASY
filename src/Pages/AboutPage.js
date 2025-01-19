import React from "react";
import portraitImage from "./TanZhiHuiJensen.png";

const AboutPage = () => {
    const centeredStyle = {
        textAlign: "center"
    };

    return (
        <div>
            <h3> About EASYBEASY Bioinformatics </h3>
            <p> 
            EASYBEASY Bioinformatics is an educational platform designed to showcase the various sub-fields of bioinformatics. Through EASYBEASY, users can interact with a range of implemented tools to explore how bioinformatics is applied in biological research. The ultimate goal of EASYBEASY is to help users understand how bioinformaticians leverage programming and software tools to solve complex problems in biological science.
            </p>
            <p> 
                Disclaimer: EASYBEASY Bioinformatics is an educational website designed to introduce basic-level knowledge on the various aspects of Bioinformatics.
            </p>
            <h3> Meet the Team </h3>

            <div style={centeredStyle} > 
                <img 
                    src={portraitImage}
                    alt="Portrait of Tan Zhi Hui Jensen"
                    style={{
                        width: "205px", // Adjust the width of the image
                        height: "250px", // Adjust the height of the image
                        borderRadius: "50%", // Makes the image circular
                        margin: "10px 0", // Adds space above and below the image
                    }}
                />
                <h6> Tan Zhi Hui Jensen </h6>
                <p> 
                    Full-Stack Developer and Creator of EASYBEASY Bioinformatics <br />
                    Prospective Computer Science Undergraduate (Matriculation Year: 2026), National University of Singapore <br />
                    Diploma with Merit (2024) Medical Biotechnology, Temasek Polytechnic 
                </p>
            </div>
        </div>
    );
};

export default AboutPage;