/* eslint-disable react/prop-types */
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import StarRating from "./StarRating";

export default function ItemDetail(props) {
    const { title, price, description, image, rating, stock } = props.producto

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Image src={image} rounded />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h2>{title}</h2>
                    </Row>
                    <Row>
                        <Col>
                            <span className="text-muted">({rating.rate}) </span>
                            <StarRating rating={rating.rate}/>
                            <span className="text-muted"> ({rating.count})</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <p>{description}</p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h2>${price}</h2>
                    </Row>
                    <Row>
                        <div className="d-grid gap-2">
                            <ItemCount stock={stock} />
                            <Button variant="primary" size="lg">
                                Comprar Ahora
                            </Button>
                            <Button variant="secondary" size="lg">
                                Agregar al Carrito
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}