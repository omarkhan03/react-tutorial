import { createRoot } from 'react-dom/client'
import App from './app.js'
import Clicker from './clicker.js'
import './style.css'

const root = createRoot(document.querySelector('#root'))

const title = 'dawg'

root.render(
    <div>
        <App clickersCount = { 3 }>
            <h1>First React Tutorial</h1>
            <h2>Counter</h2>
        </App>
    </div>
    
)