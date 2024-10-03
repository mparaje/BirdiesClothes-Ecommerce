import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import styles from './CheckoutForm.module.css';

export const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here goes the logic to process the order
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Customer Information</h2>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label className={styles.formLabel}>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    {...register("name", { required: "This field is required" })}
                    isInvalid={!!errors.name}
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label className={styles.formLabel}>Email</Form.Label>
                <Form.Control
                    type="email"
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                    isInvalid={!!errors.email}
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label className={styles.formLabel}>Phone</Form.Label>
                <Form.Control
                    type="tel"
                    {...register("phone", {
                        required: "This field is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number (10 digits)"
                        }
                    })}
                    isInvalid={!!errors.phone}
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.phone?.message}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Label className={styles.formLabel}>Address</Form.Label>
                <Form.Control
                    type="text"
                    {...register("address", { required: "This field is required" })}
                    isInvalid={!!errors.address}
                    className={styles.formControl}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <div className= {styles.containerSubmitBtn}>
                <button className={styles.submitButton}>
                    Complete Purchase
                </button>
            </div>
        </Form>
    );
};