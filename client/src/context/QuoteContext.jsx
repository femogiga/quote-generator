import { createContext, useState, useEffect } from "react"
import random from "random"

export const QuoteContext = createContext()




const QuoteProvider = (props) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const baseUrl = 'https://quote-garden.onrender.com/api/v3/quotes/?limit=10000'

    useEffect(() => {
        setIsLoading(true)
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => res.data)
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
            .catch(error => console.error(error))

    }, [])








    return (
        <QuoteContext.Provider value={{ data, setData, isLoading, setIsLoading }}>
            {props.children}
        </QuoteContext.Provider>
    )
}



export default QuoteProvider
