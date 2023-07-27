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
    const { data, setData } = useContext(QuoteContext)

    useEffect(() => {


        const filteredAuthor = data.filter(quote => {
            return quote.quoteAuthor === author
        })
        setAuthorData(filteredAuthor)

    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        setAuthorData(data)

    }


    return (
        <div className='author'>
            <Refresh onClick={(e)=>handleClick(e)}/>
            <h5>{quoteAuthor}</h5>
            {
                authorData.map(quote => (<Card key={quote._id} quoteAuthor={quote.quoteAuthor} quoteText={quote.quoteText}  />))
            }
        </div>
    )
}






export default Author
