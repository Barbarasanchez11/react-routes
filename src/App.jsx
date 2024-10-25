import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Projects from './paginas/Projects'
import Resume from './paginas/Resume'

function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/Projects' element= {<Projects />} />
                <Route path='/Resume' element= {<Resume />} />
            </Routes>
        </Router>
    )
}
export default App