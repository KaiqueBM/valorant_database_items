import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

import Home from "./routes/Home";
import NewPost from './routes/NewPost';
import Sprays from './routes/Sprays'
import Mapas from './routes/Mapas';
import Bundles from './routes/Bundles'
import Cards from './routes/Cards';
import Chaveiros from './routes/Chaveiros';

import './styles/index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sprays",
        element: <Sprays />
      },
      {
        path: "/mapas",
        element: <Mapas />
      },
      {
        path: "/bundles",
        element: <Bundles />
      },
      {
        path: "/chaveiros",
        element: <Chaveiros />
      },
      {
        path: "/cards",
        element: <Cards />
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
