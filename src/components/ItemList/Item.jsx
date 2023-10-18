/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

export default function Item(props) {
    const { title, price, image } = props.producto
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">${price}</small>
            </Card.Footer>
        </Card>
    )
}