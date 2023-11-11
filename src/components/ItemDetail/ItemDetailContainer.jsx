import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import NotFound from "../NotFound"
import LoadingSpinner from "../LoadingSpinner"
import { getProduct } from "../../utils/FirebaseUtils"

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        setLoading(true)
        getProduct(params.id).then((snapshot) => {
            setItem(({id: snapshot.id, ...snapshot.data()}))
            setLoading(false)
        })
        // })
        // getProducts().then(res => {
        //     res.forEach(prod => {
        //         if (prod.id == params.id) {
        //             setItem(prod)
        //         }
        //     })
        //     setLoading(false)
        // })
    }, [params])

    if (item == null) {
        if (loading) {
            return (
                <LoadingSpinner/>
            )
        } else {
            return (<NotFound/>)
        }
    } else {
        return (
            <ItemDetail producto={item} />
        )
    }
}