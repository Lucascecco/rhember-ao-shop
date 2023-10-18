import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
    const params = useParams()

    return (
        <Container>
            <ItemList categoria={params.categoria}/>
        </Container>
    )
}