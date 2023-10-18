import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const params = useParams()

    useEffect(() => {
        getProducts().then(res => {
            res.forEach(prod => {
                if (prod.id == params.id) {
                    setItem(prod)
                }
            })
        })
    }, [params])

    if (item == null) {
        return (<></>)
    } else {
        return (
            <ItemDetail producto={item} />
        )
    }
}