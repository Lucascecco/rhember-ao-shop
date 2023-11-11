/* eslint-disable react/prop-types */
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/CartContext";
import { addOrder } from "../../utils/FirebaseUtils";

export default function Checkout({ cart }) {
    const [validated, setValidated] = useState(false);
    const [total, setTotal] = useState(0)
    const [finished, setFinished] = useState(false)
    const cartContext = useContext(Context)

    useEffect(() => {
        setTotal(cart.reduce((accumulator, prod) => accumulator + prod.quantity * prod.price, 0))
    }, [cart])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formData = new FormData(event.currentTarget)
            const formDataObj = Object.fromEntries(formData.entries())
            addOrder(cartContext.cart, formDataObj, total)
            setFinished(true)
            cartContext.clearCart()
        }

        setValidated(true);
    }

    const handleRemoveItem = (prod) => {
        cartContext.removeItem(prod.id)
    }

    if (cart.length != 0) {
        return (
            <Container>
                <Row>
                    <Col xs={8}>
                        <ItemList productos={cart} handleRemoveItem={handleRemoveItem} removable />
                    </Col>
                    <Col xs={4}>
                        <Row><h1>Total: ${total.toLocaleString()}</h1></Row>
                        <Row>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Nombre Completo</Form.Label>
                                    <Form.Control required type="text" name="name" placeholder="Nombre" />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingrese su nombre completo.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom02">
                                    <Form.Label>Número de teléfono/celular</Form.Label>
                                    <Form.Control required type="text" name="number" placeholder="Teléfono" />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingrese su número de teléfono.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom03">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control required type="email" name="email" placeholder="Correo electrónico" />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, ingrese su correo electrónico.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <br />
                                <Button type="submit">Enviar Orden de Compra</Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className="text-center">
                {finished ? <h1>Orden enviada con éxito! Gracias por confiar en nosotros.</h1> : <h1>Tu carrito está vacío! Vuelve a la tienda para añadir productos.</h1>}
            </Container>
        )
    }
}