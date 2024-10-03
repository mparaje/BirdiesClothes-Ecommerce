import { useCartContext } from "../../context/cartContext";
import { Card, ListGroup, Badge } from 'react-bootstrap';
import styles from './CheckoutSummary.module.css';

export const CheckoutSummary = () => {
    const { cart, getPriceTotal } = useCartContext();

    return (
        <Card className={styles.card}>
            <Card.Header as="h4" className={styles.cardHeader}>
                Order Summary
            </Card.Header>
            <ListGroup variant="flush">
                {cart.map((item) => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center py-3">
                        <div>
                            <span className={styles.itemTitle}>{item.title}</span>
                            <br />
                            <small className={styles.itemQuantity}>
                                Quantity: {item.quantity}
                            </small>
                        </div>
                        <Badge pill className={`${styles.itemPrice} fs-8 bg-secondary`}>
                            ${(item.price * item.quantity).toFixed(2)}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Card.Footer className={styles.cardFooter}>
                <div className="d-flex justify-content-between align-items-center">
                    <span className={styles.totalLabel}>Total:</span>
                    <h3 className={`mb-0 ${styles.totalPrice} fs-5`}>
                        ${getPriceTotal().toFixed(2)}
                    </h3>
                </div>
            </Card.Footer>
        </Card>
    );
}