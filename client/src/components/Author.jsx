import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { QuoteContext } from "../context/QuoteContext"
import Card from './Card'
import Refresh from "./Refresh"
import random from "random"



const Author = () => {
    const { quoteAuthor } = useParams()
    const [author, setAuthor] = useState(quoteAuthor)
    const [authorData, setAuthorData] = useState([])
    const { data, setData,isLoading } = useContext(QuoteContext)




    useEffect(() => {

        const filteredAuthor = data.filter(quote => {
            return quote.quoteAuthor === author
        })
        setAuthorData(filteredAuthor)

    }, [data, author])

    const handleClick = (e) => {
        e.preventDefault()
        setAuthor(data[random.int(0, data.length - 1)].quoteAuthor)


    }


    return (
        <div className='author'>
            <Refresh onClick={(e) => handleClick(e)} />

            <h5>{author}</h5>
            {
             isLoading ? <span className="material-symbols-outlined loading-fan">
             toys_fan
           </span>  :  authorData.map(quote => (<Card key={quote._id} quoteAuthor={quote.quoteAuthor} quoteText={quote.quoteText}  />))
            }
        </div>
    )
}






export default Author
