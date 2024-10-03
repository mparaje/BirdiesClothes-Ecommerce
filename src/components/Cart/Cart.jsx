/* eslint-disable react/prop-types */

import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./cartItem.module.css"
import { useCartContext } from '../../context/cartContext';
import "./cartItem.css"
import { ItemCount } from '../ItemCount/ItemCount';

export const Cart = ({item}) => {
    const {deleteFromCart,  updateQuantity} = useCartContext();
    
    const handleDelete = () => {
        deleteFromCart(item.id);
    };

    const handleQuantityChange = (newQuantity) => {
        updateQuantity(item.id, newQuantity);
    };
    
    return(
        <Col>
            <Card className={styles.cartItem} id="cart-item">
                <div className={styles.cardImg}>
                    <Card.Img variant="top" src={item.image}/>
                </div>
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle} id="cart-title-card">{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <ItemCount stock={10} initial={item.quantity} onCountChange={handleQuantityChange}/>
                    <Card.Text>Total: ${(item.quantity * item.price).toFixed(2)}</Card.Text>
                    <Button onClick={handleDelete} className={styles.cardBtnDelete} id="btn-delete-style">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};