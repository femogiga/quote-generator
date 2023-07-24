import { useEffect, useState } from 'react'
import random from 'random'

import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [randomAuthor, setRandomAuthor] = useState("")


  const handleClick = (quoteAuthor) => {
    const quotes = data.filter(quote => {
      return quote.quoteAuthor = quoteAuthor
    })
    setAuthorQuotes(quotes)
    return quotes

  }



  useEffect(() => {
    fetch('https://quote-garden.onrender.com/api/v3/quotes')
      .then(res => res.json())
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => console.error(error))


  }, [])


  useEffect(() => {
    setRandomAuthor(data[random.int(0, data.length - 1)])
  }, [data])





  // console.log(Array.isArray( data))
  // console.log(data[4]?.quoteText)
  console.log(randomAuthor)
  return (
    <div>

      {data && <Card quoteText={randomAuthor?.quoteText} />}
    </div>
  )
}

export default App
