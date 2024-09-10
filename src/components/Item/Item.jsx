/* eslint-disable react/prop-types */
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import styles from "./item.module.css"
import "./item.css"

export const Item = ({item}) => {
    return(
        <Col xs={12} sm={6} md={4} lg={3} className='p-3'>
            <Card className={styles.cardProducto}>
                <div className={styles.imgContainer}>
                    <Card.Img variant="top" src={item.image} className={styles.imgCard} />
                </div>
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>{item.title}</Card.Title>
                    <Button as={Link} to={`/product/${item.id}`} className={styles.detailButton} id='btn-styles'>Info</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};