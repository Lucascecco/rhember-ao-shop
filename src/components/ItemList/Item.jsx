/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

export default function Item({producto, removable = false, handleRemoveItem}) {
    const { title, price, image_id, quantity } = producto

    const handleRemove = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleRemoveItem(producto)
    }

    // return (
    //     <Card style={{ height: '20vh' }}>
    //         <Row>
    //             <Col className="text-center">
    //                 <Image style={{ maxWidth:"100%", height: '20vh' }} src={image} rounded/>
    //             </Col>
    //             <Col as={"div"} style={{marginTop: "auto", marginBottom: "auto"}}>
    //                 <Row>
    //                     <h5>{title}</h5>
    //                 </Row>
    //                 <Row>
    //                     <p><span className="text-muted">${price}</span></p>
    //                 </Row>
    //             </Col>
    //         </Row>
    //     </Card>
    // )
    return (
        <Card style={{height: '100%'}}>
            <Card.Body>
                <Card.Img variant="top" src={image_id} style={{ width: '100%', height: '20vh', objectFit: 'contain' }} />
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>
                    ${price.toLocaleString()}
                </Card.Subtitle>
                {quantity !== undefined ? <Card.Subtitle>Cantidad: {quantity}</Card.Subtitle> : <></>}
                {removable ? <><br/><Button onClick={handleRemove}>Eliminar</Button></> : <></>}
            </Card.Body>
        </Card>
    )
}