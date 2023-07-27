import { Link } from "react-router-dom"


const Card = ({ quoteText, onClick, quoteAuthor,quoteGenre }) => {

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis eos vero sed repudiandae accusantium doloribu cum dolor nam similique earum, quod et culp inventore deserunt unde dolore adipisci velit ipsum"


    return (
        <blockquote className='card flex' >
            <div className='quote-container flex'>
                <div className='line'></div>
                <p>
                    {quoteText}
                </p>
            </div>
            {/* onClick add event listener to move to nextpage */}
            <Link to={`/author/${quoteAuthor}`} onClick={onClick}>
                <div className='name-tag-container flex'>
                    <div>
                        <h5 className='flow-p3'>{quoteAuthor}</h5>
                        <p>{quoteGenre}</p>
                    </div >
                    <p className="arrow">&#10141;</p>
                </div>
            </Link>
        </blockquote>
    )
}



export default Card
