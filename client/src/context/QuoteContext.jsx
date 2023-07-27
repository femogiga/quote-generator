import { createContext, useState, useEffect } from "react"
import random from "random"

export const QuoteContext = createContext()




const QuoteProvider = (props) => {

    const [data, setData] = useState([])
    const baseUrl = 'https://quote-garden.onrender.com/api/v3/quotes/?limit=10000'

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => res.data)
            .then(res => setData(res))
            .catch(error => console.error(error))

    }, [])






    console.log('data', data)


    return (
        <QuoteContext.Provider value={{ data, setData }}>
            {props.children}
        </QuoteContext.Provider>
    )
}



export default QuoteProvider
