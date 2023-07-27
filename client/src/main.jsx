import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Author from './components/Author.jsx'
import QuoteProvider from './context/QuoteContext.jsx'




const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuoteProvider><App /></QuoteProvider>} />
        <Route path="/author/:quoteAuthor" element={<QuoteProvider><Author /></QuoteProvider>} />
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
