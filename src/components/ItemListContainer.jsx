/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function ItemListContainer(props) {
    return (
        <>
            <Container>
                <h1>{props.greeting}</h1>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Producto</Card.Title>
                            <Card.Text>
                                Descripción
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Producto</Card.Title>
                            <Card.Text>
                                Descripción
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Producto</Card.Title>
                            <Card.Text>
                                Descripción
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}