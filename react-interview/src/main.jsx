import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import App from './App.jsx'
import AppContext from './components/app-context.jsx'
import ReduxContext from "./components/ReduxContext.jsx"
import Store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <ReduxContext/>
    </Provider>
  </StrictMode>,
)
