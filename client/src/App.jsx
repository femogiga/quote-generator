import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://quote-garden.onrender.com/api/v3/quotes')
      .then(res => res.json())
      .then(res => res.data)
      .then(res => setData(res))


  }, [])
  console.log(data[0])
  return (
    <div>

      <Card quote={data[0].quoteText} />
    </div>
  )
}

export default App
