import { Link } from "react-router-dom"


const Card = ({quote}) => {

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis eos vero sed repudiandae accusantium doloribu cum dolor nam similique earum, quod et culp inventore deserunt unde dolore adipisci velit ipsum"
    return (
        <blockquote className='card flex' >
            <div className='quote-container flex'>
                <div className='line'></div>
                <p>
                    {quote}
                </p>
            </div>
            <Link>
                <div className='name-tag-container flex'>
                    <div>
                        <h5 className='flow-p3'>Bill Gates</h5>
                        <p>Business</p>
                    </div >
                    <p>&#10141;</p>
                </div>
            </Link>
        </blockquote>
    )
}



export default Card
