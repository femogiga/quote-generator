import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";


const Card = ({ quoteText, onClick, quoteAuthor, quoteGenre }) => {




    return (
        <blockquote className='card flex' >
            <div className='quote-container flex'>
                <div className='line'></div>
                <p>
                    {quoteText}
                </p>
            </div>
            {/* onClick  to refresh data */}
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
Card.propTypes = {
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
    quoteGenre: PropTypes.string,
    onClick: PropTypes.func,

};


export default Card
