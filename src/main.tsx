import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

import Home from "./routes/Home";
import Sprays from './routes/Sprays'
import Mapas from './routes/Mapas';
import Bundles from './routes/Bundles'
import Cards from './routes/Cards';
import Chaveiros from './routes/Chaveiros';

import './styles/index.css'
import './index.css'
import Agentes from './routes/Agentes';
import AgenteInfo from './routes/AgenteInfo';
import BundlesInfo from './routes/BundlesInfo';

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
        path: "/agentes",
        element: <Agentes />
      },
      {
        path: "/agentes/:uuid",
        element: <AgenteInfo />
      },
      {
        path: "/bundles/:uuid",
        element: <BundlesInfo />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
