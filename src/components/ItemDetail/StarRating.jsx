/* eslint-disable react/prop-types */
import { Image } from 'react-bootstrap'
import fullStar from '../../assets/star-full.png'
import halfStar from '../../assets/star-half.png'
import emptyStar from '../../assets/star-empty.png'

export default function StarRating({rating}) {
    const round = Math.round(rating * 2) / 2
    const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < Math.trunc(round)) {
            stars.push(<Image width="7%" src={fullStar}/>)
        } else {
            if (round - i == 0.5) {
                stars.push(<Image width="7%" src={halfStar}/>)
            } else {
                stars.push(<Image width="7%" src={emptyStar}/>)
            }
        }
    }

    return (
        <>
            {stars}
        </>
    )
}
