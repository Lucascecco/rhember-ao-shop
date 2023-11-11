/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap"
import Item from "./Item"
import { NavLink } from "react-router-dom"

export default function ItemList({ productos, removable = false, handleRemoveItem }) {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {productos.map(prod => <Col key={prod.id}><NavLink to={'/item/' + prod.id}><Item removable={removable} handleRemoveItem={handleRemoveItem} producto={prod}/></NavLink></Col>)}
        </Row>
    )
}