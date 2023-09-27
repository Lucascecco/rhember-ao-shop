import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function Main() {
    return (
        <main>
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
        </main>
    )
}