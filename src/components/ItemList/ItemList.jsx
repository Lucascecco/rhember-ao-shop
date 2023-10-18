/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap"
import Item from "./Item"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock.js"
import { NavLink } from "react-router-dom"

export default function ItemList({ categoria }) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProductos(products.filter(prod => prod.category == (categoria ?? prod.category)))
        })
    }, [categoria])

    return (
        <Row md={4} className="g-4">
            {productos.map(prod => <Col key={prod.id}><NavLink to={'/item/' + prod.id}><Item producto={prod}/></NavLink></Col>)}
        </Row>
    )
}