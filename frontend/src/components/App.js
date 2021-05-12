import React from 'react';
import ReactDOM from 'react-dom'

// Components
import Navbar from './Navbar'
import Home from './Home'

// Styles
// import '../../static/css/style.css'

export default function App() {
    return (
        <div>
            <Navbar />
            
            <Home />
        </div>
    )
}

const appDiv = document.getElementById('app');
ReactDOM.render(<App />, appDiv);
