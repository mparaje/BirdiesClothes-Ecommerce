/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./itemDetail.module.css"
import "../Item/item.css"
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({detail}) => {
    if (!detail) {
        return <div>Loading...</div>;
    }

    return (
        <Container className={styles.itemDetailContainer}>
            <Row>
                <Col md={6} className={styles.imageColumn}>
                    {detail.image && <img src={detail.image} alt={detail.title} className={styles.productImage} />}
                </Col>
                <Col md={6} className={styles.infoColumn}>
                    {detail.title && <h1 className={styles.productTitle}>{detail.title}</h1>}
                    {detail.price !== undefined && <p className={styles.productPrice}>${detail.price}</p>}
                    {detail.rating && (
                        <div className={styles.ratingContainer}>
                            <span className={styles.ratingStars}>{"★".repeat(Math.round(detail.rating.rate || 0))}</span>
                            <span className={styles.ratingCount}>({detail.rating.count || 0} reviews)</span>
                        </div>
                    )}
                    {detail.description && <p className={styles.productDescription}>{detail.description}</p>}
                    <ItemCount stock={10} initial = {0} onAdd={null}/>
                </Col>
            </Row>
        </Container>
    )
};