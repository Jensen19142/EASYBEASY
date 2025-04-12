import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "../App.module.css";
import SurveillanceRelativeFrequency from "../Components/SurveillanceRelativeFrequency";
import SurveillanceBarChartFrequency from "../Components/SurveillanceBarChartFrequency";
import SubmissionPerCountry from "../Components/SubmissionPerCountry";
import Container from "react-bootstrap/Container";
import CountrySubmissionCount from "../Components/CountrySubmissionCount";
import SampleCollection from "../Components/SampleCollection";

const InfectiousDiseaseSurveillance = () => {

    return (
        <Container className={style.container}>
        <Row className="mb-3 mt-4">
            <h3> Infectious Disease Surveillance </h3>
            <p> Bioinformaticians use dashboards as powerful tools to facilitate real-time monitoring and analysis of infectious disease data, such as tracking influenza subtypes and their frequencies. By leveraging dashboards, they can aggregate large volumes of data from diverse sources like hospitals, research institutions, and public health databases, making it easier to visualize trends, detect outbreaks, and understand the dynamics of influenza transmission. These dashboards are often designed with interactive features such as filters, search capabilities, and real-time updates, allowing bioinformaticians to quickly adjust parameters and focus on specific regions, time periods, or subtypes of the virus (e.g., A/H1N1, A/H3N2). The data is typically presented in the form of graphs, heatmaps, and tables, enabling them to identify patterns in infection rates, geographical distribution, and subtype prevalence. Bioinformaticians can also use these dashboards to share findings with other researchers or public health officials, fostering collaboration and informed decision-making in response to emerging influenza strains or shifts in epidemiological trends. By integrating these tools into their daily workflows, bioinformaticians enhance their ability to make data-driven predictions and contribute to more effective public health responses.
            </p>
            <h10> Note: All data to produce the visualization tools were updated on 6 April 2025 and were made publicly accessible via GISAID EpiFlu.  </h10>
            <Col xs lg={6} className="mt-5 mb-3">
            <p><b> Relative Frequency of Influenza Subtypes Over Time  </b></p>
            <SurveillanceRelativeFrequency   />
            </Col>
            <Col xs lg={6} className="mt-5 mb-3">
            <p><b> Total Global Monthly Influenza Cases  </b></p>
            <SurveillanceBarChartFrequency />
            </Col>
        </Row>

        <Row className="mb-3 mt-4">
        <p><b> Most Recent Submission Per Country  </b></p>
        <SubmissionPerCountry   />    
        </Row>
        <Row className="mb-3 mt-4">
        <p><b> Country Submission Count  </b></p>
        <CountrySubmissionCount />
        </Row>
        <Row className="mb-3 mt-4">
        <p><b> Most Recent Sample Collection Per Country </b></p>
        <SampleCollection />
        </Row>

    </Container>
    )
};

export default InfectiousDiseaseSurveillance;