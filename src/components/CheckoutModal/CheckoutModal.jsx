/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export const CheckoutModal = ({ show, onHide, orderId }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Purchase Completed</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Thank you for your purchase! Your order number is: <strong>{orderId}</strong></p>
      </Modal.Body>

      <Modal.Footer>
        <Button as={Link} to='/'variant="dark" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}