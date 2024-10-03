/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { CheckoutSummary } from '../CheckoutSummary/CheckoutSummary';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./checkoutContainer.module.css"

export const CheckoutContainer = ({setIsCartOpen}) => {
    useEffect(()=>{
        setIsCartOpen(false);
    },[setIsCartOpen])


    return (
        <Container fluid className={styles.container}>
            <Container>
                <Row className="gx-5">
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className={styles.formContainer}>
                            <CheckoutForm />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className={styles.stickyContainer}>
                            <CheckoutSummary />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};