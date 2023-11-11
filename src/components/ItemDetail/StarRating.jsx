/* eslint-disable react/prop-types */
import { Image } from 'react-bootstrap'
import fullStar from '../../assets/star_full.png'
import halfStar from '../../assets/star_half.png'
import emptyStar from '../../assets/star_empty.png'

export default function StarRating({rating}) {
    const round = Math.round(rating * 2) / 2
    const stars = []

    function addStar(key, src) {
        stars.push(<Image key={key} src={src}/>)
    }

    for (let i = 0; i < 5; i++) {
        if (i < Math.trunc(round)) {
            addStar(i, fullStar)
        } else {
            if (round - i == 0.5) {
                addStar(i, halfStar)
            } else {
                addStar(i, emptyStar)
            }
        }
    }

    return (
        <>
            {stars}
        </>
    )
}
