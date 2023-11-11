/* eslint-disable react/prop-types */
import { Button, Form, InputGroup } from "react-bootstrap";

export default function ItemQuantitySelector({ handleIncrease, handleDecrease, quantity }) {
    return (
        <>
            <InputGroup>
                <Button onClick={handleDecrease} variant="outline-secondary">
                    -
                </Button>
                <Form.Control className={'text-center'} value={quantity} disabled />
                <Button onClick={handleIncrease} variant="outline-secondary">
                    +
                </Button>
            </InputGroup>
        </>
    )
}