/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import LoadingSpinner from '../LoadingSpinner.jsx';
import { getCategoryProducts, getProducts } from '../../utils/FirebaseUtils.jsx';


export default function ItemListContainer({ titulo }) {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        let itemsCollection
        if (params.category != undefined) {
            itemsCollection = getCategoryProducts(params.category)
        } else {
            itemsCollection = getProducts()
        }
        itemsCollection.then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            setLoading(false)
        })
        // getProducts().then(products => {
        //     setProductos(products.filter(prod => prod.category == (params.categoria ?? prod.category)))
        //     setLoading(false)
        // })
    }, [params])


    if (loading) {
        return (
            <LoadingSpinner />
        )
    } else {
        return (
            <Container>
                <h1>{titulo}</h1>
                <ItemList productos={products} />
            </Container>
        )
    }
}