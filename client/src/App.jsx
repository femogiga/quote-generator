import { useContext, useEffect, useState } from 'react'
import random from 'random'
import './App.css'
import Card from './components/Card'
import { QuoteContext } from './context/QuoteContext'
import Refresh from './components/Refresh'



function App() {
  // const [data, setData] = useState([])
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [randomAuthor, setRandomAuthor] = useState("")
  const Loading = <span className="material-symbols-outlined">
    toys_fan
  </span>




  const { data, setData, isLoading } = useContext(QuoteContext)

  useEffect(() => {
    // console.log(data)
    setRandomAuthor(data[random.int(0, data.length - 1)])
  }, [data])



  const handleClick = (e) => {
    e.preventDefault()
    setRandomAuthor(data[random.int(0, data.length - 1)])
  }






  return (
    <div className='app'>
      <Refresh onClick={(e) => handleClick(e)} />

      {isLoading ? <span className="material-symbols-outlined loading-fan">
        toys_fan
      </span> : <Card quoteText={randomAuthor?.quoteText} quoteAuthor={randomAuthor?.quoteAuthor} authorQuotes={authorQuotes} quoteGenre={randomAuthor?.quoteGenre} />}
    </div>
  )
}

export default App
