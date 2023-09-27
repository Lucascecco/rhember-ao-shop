import cartImg from '../assets/cart.svg'

export default function CartWidget() {
    return (
        <>
            <div className='text-center' style={{background: "#E9484B", color: "white", borderRadius: "50%", width: 24, height: 24, border: "1px solid #000", font: "20px Arial, sans-serif"}}>
                <p>5</p>
            </div>
            <img src={cartImg} height={48}></img>
        </>
    )
}