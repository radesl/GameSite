import React from 'react'
import NavBar from './../NavBar'
import Header from './../Header'
import MobileMenuBar from './../MobileMenuBar'
import './style.scss'

const App = () => {
    return (
        <div className='App'>
            <div className='App__Header'>
                <Header />
            </div>
            <div className='App__NavBar'>
            <NavBar />
            </div>
            <div className='App__MobileMenuBar'>
                <MobileMenuBar/>
            </div>
        </div>
    )
}
export default App