import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Style from './Footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                <Row className="mt-5">
                    <div class="jumbotron text-center" className={Style.footerContainer}>
                        <Form.Text style={{ color: "#333" }}>Diploma with Merit in Medical Biotechnology, Temasek Polytechnic {process.env.REACT_APP_VERSION}&nbsp;
                            &#169; 13 October 2024, Tan Zhi Hui Jensen
                        </Form.Text>
                    </div>
                </Row>
            </Fragment>
        )
    }
}

export default Footer;
