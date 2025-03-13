import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import style from "../App.module.css";
import SurveillanceTracking from "../Components/SurveillanceTracking";
import SurveillanceFrequency from "../Components/SurveillanceFrequency";
import Container from "react-bootstrap/Container";

const InfectiousDiseaseSurveillance = () => {

    return (
        <Container className={style.container}>
        <Row className="mb-3 mt-4">
            <h3> Infectious Disease Surveillance </h3>
            <h5> Tracking of Influenza Subtypes </h5>
            <SurveillanceTracking   />
        </Row>
        <Row className="mb-3 mt-4">
        <h5> Influenza Subtypes Frequncy Dashboard </h5>
        <SurveillanceFrequency   />
    </Row>
        </Container>
    )
};

export default InfectiousDiseaseSurveillance;