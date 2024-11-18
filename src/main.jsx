import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet>
        <title>Najatul Islam - Official Website</title>
        <meta
          name="description"
          content="Welcome to Najatul Islam's official website. Explore projects, portfolios, and blogs."
        />
        <meta name="keywords" content="Najatul Islam, portfolio, official website" />
        <meta name="author" content="Najatul Islam" />
      </Helmet>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
