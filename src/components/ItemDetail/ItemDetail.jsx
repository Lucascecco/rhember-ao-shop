/* eslint-disable react/prop-types */
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import ItemQuantitySelector from "./ItemQuantitySelector";
import StarRating from "./StarRating";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { Context } from "../../context/CartContext";

export default function ItemDetail({producto}) {
    const { title, price, description, image_id, rating, rating_count, stock } = producto
    const [counter, setCounter] = useState(1)
    const cartContext = useContext(Context)
    const navigate = useNavigate()

    const handleIncrease = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        cartContext.addToCart(producto, counter)
        navigate("/cart")
    }

    return (
        <Container>
            <Row xs={1} lg={3}>
                <Col lg={4}>
                    <Row className="width-100 justify-content-center" >
                        <Image src={image_id} thumbnail />
                    </Row>
                </Col>
                <Col lg={8}>
                    <Row>
                        <h2>{title}</h2>
                    </Row>
                    <Row>
                        <Col>
                            <span className="text-muted">({rating}) </span>
                            <StarRating rating={rating}/>
                            <span className="text-muted"> ({rating_count.toLocaleString()})</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <h2>${price.toLocaleString()}</h2>
                    </Row>
                    <Row>
                        <div className="d-grid gap-2">
                            <Form.Label>Cantidad: <span className="text-muted">({stock} disponibles)</span></Form.Label>
                            <ItemQuantitySelector handleIncrease={handleIncrease} handleDecrease={handleDecrease} quantity={counter} />
                            <Button onClick={addToCart} variant="primary" size="lg">
                                <NavLink className={'nav-link'} to={'/cart'}>Agregar al Carrito</NavLink>
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <hr />
            <Row>
                <h1>Descripción</h1>
                <p>{description}</p>
            </Row>
        </Container>
    )
}