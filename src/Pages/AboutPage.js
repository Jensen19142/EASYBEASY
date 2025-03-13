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
            EASYBEASY Bioinformatics is an educational platform designed to teach users about the fascinating world of bioinformatics. By featuring a variety of interactive tools and software, EASYBEASY allows users to experiment and explore the practical applications of bioinformatics in biological research. The platform is crafted to inspire users to feel like bioinformaticians themselves, gaining hands-on experience and insights into how programming and computational tools are utilized to solve complex problems in biological science. Through EASYBEASY, users can delve into the diverse sub-fields of bioinformatics and deepen their understanding of this dynamic field.
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
                    Creator of EASYBEASY Bioinformatics and Full-Stack Developer <br />
                    Prospective Computer Science Undergraduate (Matriculation Year: 2026), National University of Singapore <br />
                    Diploma with Merit (2024) Medical Biotechnology, Temasek Polytechnic 
                </p>
            </div>
        </div>
    );
};

export default AboutPage;