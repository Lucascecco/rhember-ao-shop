/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function ItemCount({ stock }) {
    const [contador, setContador] = useState(1)

    const onRemove = () => {
        if (contador > 1) setContador(contador - 1)
    }

    const onAdd = () => {
        if (contador < stock) setContador(contador + 1)
    }

    return (
        <>
            <Form.Label>Cantidad: <span className="text-muted">({stock} disponibles)</span></Form.Label>
            <InputGroup>
                <Button onClick={onRemove} variant="outline-secondary">
                    -
                </Button>
                <Form.Control className={'text-center'} value={contador} disabled />
                <Button onClick={onAdd} variant="outline-secondary">
                    +
                </Button>
            </InputGroup>
        </>
    )
}